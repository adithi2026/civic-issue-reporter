import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms
import os

# Settings
IMG_SIZE = 128
BATCH_SIZE = 16
EPOCHS = 5

# Transform
transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor()
])

# Dataset
dataset = datasets.ImageFolder("dataset", transform=transform)
loader = torch.utils.data.DataLoader(dataset, batch_size=BATCH_SIZE, shuffle=True)

class_names = dataset.classes
print("Classes:", class_names)

# Model
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
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(EPOCHS):
    total_loss = 0
    for images, labels in loader:
        outputs = model(images)
        loss = criterion(outputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    print(f"Epoch {epoch+1}, Loss: {total_loss:.4f}")

# Save model
os.makedirs("model", exist_ok=True)
torch.save(model.state_dict(), "model/model.pth")

print("Model saved ")