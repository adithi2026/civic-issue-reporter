const MapView = ({ location }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <p>📍 Location: {location}</p>

      <iframe
        title="map"
        width="100%"
        height="200"
        loading="lazy"
        src={`https://www.google.com/maps?q=${location}&output=embed`}
      ></iframe>
    </div>
  );
};

export default MapView;