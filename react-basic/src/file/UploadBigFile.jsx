import React, { useState, useEffect } from 'react';  
  
const FileUploader = () => {  
  const [file, setFile] = useState(null);  
  const [chunks, setChunks] = useState([]);  
  const [uploadedChunks, setUploadedChunks] = useState([]);  
  
  const handleFileChange = (event) => {  
    const selectedFile = event.target.files[0];  
    setFile(selectedFile);  
    const chunkSize = 1024 * 1024; // 1MB per chunk  
    const fileChunks = [];  
    let start = 0;  
    while (start < selectedFile.size) {  
      fileChunks.push(selectedFile.slice(start, start + chunkSize));  
      start += chunkSize;  
    }  
    setChunks(fileChunks);  
    // 假设这里从服务器获取已上传的块信息  
    // fetchUploadedChunks(selectedFile.name).then(setUploadedChunks);  
  };  
  
  const uploadChunk = async (index, chunk) => {  
    // 这里需要添加处理上传的代码，包括发送文件块到Spring Boot服务器  
    // 示例略  
  };  
  
  useEffect(() => {  
    if (chunks.length > 0 && uploadedChunks.length < chunks.length) {  
      const nextChunkIndex = uploadedChunks.length;  
      uploadChunk(nextChunkIndex, chunks[nextChunkIndex]);  
    }  
  }, [chunks, uploadedChunks]);  
  
  return (  
    <div>  
      <input type="file" onChange={handleFileChange} />  
      {/* 显示上传进度等UI组件 */}  
    </div>  
  );  
};  
  
export default FileUploader;