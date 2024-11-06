/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

function AttachmentList({ onUpdateAttachmentCount }) {
  const [attachmentCount, setAttachmentCount] = useState(0);

  useEffect(() => {
    fetchAttachmentCount();
  }, []);

  const fetchAttachmentCount = async () => {
    try {
      const response = await axios.get("http://localhost:5000/files/count");
      const count = response.data.count;
      setAttachmentCount(count);
      onUpdateAttachmentCount(count); 
    } catch (error) {
      console.error("Failed to fetch attachment count", error);
    }
  };

  const handleFileChange = async (event) => {
    const formData = new FormData();
    Array.from(event.target.files).forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post("http://localhost:5000/files", formData);
      const newCount = response.data.count;
      setAttachmentCount(newCount);
      onUpdateAttachmentCount(newCount); 
    } catch (error) {
      console.error("File upload failed", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <p>Total Attachments: {attachmentCount}</p>
    </div>
  );
}

export default AttachmentList;
