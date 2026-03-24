import React, { useState } from "react";
import { reportIssue } from "../services/issueService";

function ReportIssue() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("image", form.image);

    const res = await reportIssue(data);

    // 🤖 AI result from backend
    setResult({
      prediction: res.data.aiPrediction,
      confidence: res.data.confidence,
    });
  };

  return (
    <div>
      <h2>📤 Report Issue</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />

        <input type="file" name="image" onChange={handleChange} />

        {preview && <img src={preview} alt="preview" width="200" />}

        <button type="submit">Submit</button>
      </form>

      {/* 🤖 AI Result */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>🤖 AI Prediction</h3>
          <p>Type: {result.prediction}</p>
          <p>Confidence: {result.confidence}%</p>
        </div>
      )}
    </div>
  );
}

export default ReportIssue;