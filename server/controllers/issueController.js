const Issue = require("../models/Issue");
const { getPrediction } = require("../services/aiService");

exports.createIssue = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file.path;

    // 🤖 Call AI
    const aiResult = await getPrediction(imagePath);

    const issue = await Issue.create({
      title,
      description,
      image: imagePath,
      aiPrediction: aiResult?.prediction,
      confidence: aiResult?.confidence,
      createdBy: req.user?.id,
    });

    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const issue = await Issue.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.upvoteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.upvotes += 1;
    await issue.save();

    res.json(issue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};