const express = require("express");
const router = express.Router();
const {
  createIssue,
  getIssues,
  updateStatus,
  upvoteIssue
} = require("../controllers/issuecontroller");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createIssue);
router.get("/", getIssues);
router.put("/:id/status", protect, updateStatus);
router.put("/:id/upvote", protect, upvoteIssue);

module.exports = router;