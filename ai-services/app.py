from flask import Flask, request, jsonify
import torch
import torch.nn as nn
from torchvision import transforms
from PIL import Image

app = Flask(__name__)

IMG_SIZE = 128
class_names = ["pothole", "garbage", "road_damage", "other"]

# Model (same as training)
class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(3, 32, 3), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(32, 64, 3), nn.ReLU(), nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3), nn.ReLU(), nn.MaxPool2d(2)
        )
        self.fc = nn.Sequential(
            nn.Flatten(),
            nn.Linear(128 * 14 * 14, 128),
            nn.ReLU(),
            nn.Linear(128, len(class_names))
        )

    def forward(self, x):
        x = self.conv(x)
        x = self.fc(x)
        return x

model = CNN()
model.load_state_dict(torch.load("model/model.pth", map_location=torch.device('cpu')))
model.eval()

transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor()
])

@app.route("/")
def home():
    return "PyTorch AI Service Running"

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]
    image = Image.open(file.stream).convert("RGB")

    img = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(img)
        _, predicted = torch.max(outputs, 1)
        confidence = torch.softmax(outputs, dim=1)[0][predicted].item()

    return jsonify({
        "prediction": class_names[predicted.item()],
        "confidence": round(confidence * 100, 2)
    })

if __name__ == "__main__":
    app.run(port=5001, debug=True)