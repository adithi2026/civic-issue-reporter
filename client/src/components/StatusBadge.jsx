const StatusBadge = ({ status }) => {
  const getColor = () => {
    if (status === "resolved") return "green";
    if (status === "in-progress") return "orange";
    return "red";
  };

  return (
    <span style={{
      padding: "5px 10px",
      borderRadius: "5px",
      background: getColor(),
      color: "#fff"
    }}>
      {status}
    </span>
  );
};

export default StatusBadge;