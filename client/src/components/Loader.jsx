const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px"
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "5px solid #ccc",
    borderTop: "5px solid #1e293b",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
};

export default Loader;