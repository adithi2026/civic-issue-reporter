import { useState } from "react";

const UploadImage = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{ width: "200px", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default UploadImage;