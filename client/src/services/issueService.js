import api from "./api";

// Get all issues
export const getIssues = async () => {
  const response = await api.get("/issues");
  return response.data;
};

// Report a new issue
export const reportIssue = async (issueData) => {
  const response = await api.post("/issues", issueData);
  return response.data;
};

// Update issue status
export const updateIssueStatus = async (id, status) => {
  const response = await api.put(`/issues/${id}`, { status });
  return response.data;
};

// Get single issue
export const getIssueById = async (id) => {
  const response = await api.get(`/issues/${id}`);
  return response.data;
};