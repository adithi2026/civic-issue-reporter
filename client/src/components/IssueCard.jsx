import StatusBadge from "./StatusBadge";

const IssueCard = ({ issue }) => {
  return (
    <div style={styles.card}>
      {issue.image && (
        <img src={issue.image} alt="issue" style={styles.image} />
      )}

      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
      <p><b>Location:</b> {issue.location}</p>

      <StatusBadge status={issue.status} />
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "300px"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

export default IssueCard;