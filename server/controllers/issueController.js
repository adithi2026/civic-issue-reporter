const Issue = require("../models/Issue");

exports.createIssue = async (req, res) => {
  const issue = await Issue.create({
    ...req.body,
    createdBy: req.user._id
  });
  res.json(issue);
};

exports.getIssues = async (req, res) => {
  const issues = await Issue.find().populate("createdBy", "name");
  res.json(issues);
};

exports.updateStatus = async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (issue) {
    issue.status = req.body.status;
    await issue.save();
    res.json(issue);
  }
};

exports.upvoteIssue = async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  issue.upvotes += 1;
  await issue.save();
  res.json(issue);
};