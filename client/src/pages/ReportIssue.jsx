import React, { useState } from "react";

function ReportIssue() {

  const [issue, setIssue] = useState({
    title: "",
    description: "",
    location: "",
    image: null
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setIssue({...issue, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(issue);
    alert("Issue submitted successfully!");
  };

  return (
    <div style={{padding:"40px"}}>
      <h2>Report an Issue</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Describe the issue"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="file"
          name="image"
        />
        <br /><br />

        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}

export default ReportIssue;