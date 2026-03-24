const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};

export default formatDate;