const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

exports.getPrediction = async (imagePath) => {
  const form = new FormData();
  form.append("image", fs.createReadStream(imagePath));

  try {
    const res = await axios.post("http://localhost:5001/predict", form, {
      headers: form.getHeaders(),
    });

    return res.data;
  } catch (err) {
    console.error("AI Error:", err.message);
    return null;
  }
};