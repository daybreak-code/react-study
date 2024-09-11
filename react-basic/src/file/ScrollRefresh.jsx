import React, { useState, useEffect, useRef } from 'react';  
  
const InfiniteScrollComponent = () => {  
  const [items, setItems] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);  
  const [page, setPage] = useState(1);  
  const [refreshing, setRefreshing] = useState(false);  
  const [file, setFile] = useState(null);  
  const [uploadProgress, setUploadProgress] = useState(0);  
  const scrollContainerRef = useRef(null);  // New ref for scroll container

  const fetchData = async () => {  // Moved fetchData outside useEffect
    setIsLoading(true);
    try {
      const newData = await fetchDataFromApi(page);
      setItems(prevItems => [...prevItems, ...newData]);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setItems(prevItems => [...prevItems, { text: "Error loading data. Please try again." }]);
    }
    setIsLoading(false);
  };

  useEffect(() => {  
    if (!refreshing) {  
      fetchData();  
    }  
  }, [page, refreshing]);  
  
  const handleRefresh = async () => {  
    setRefreshing(true);  
    setPage(1);
    await fetchData();  // Now fetchData is accessible here
    setRefreshing(false);  
  };  
  
  const handleScroll = () => {  
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setPage(prevPage => prevPage + 1);  
      }
    }
  };  
  
  useEffect(() => {  
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);  
  
  const handleFileChange = (event) => {  
    setFile(event.target.files[0]);  
  };  
  
  const handleUpload = async () => {  
    if (!file) {  
      alert('Please select a file first!');  
      return;  
    }  
  
    const chunkSize = 1024 * 1024; // 1MB chunks  
    const totalChunks = Math.ceil(file.size / chunkSize);  
    let uploadedChunks = 0;  
  
    for (let start = 0; start < file.size; start += chunkSize) {  
      const chunk = file.slice(start, start + chunkSize);  
      const formData = new FormData();  
      formData.append('file', chunk, file.name);  
      formData.append('chunkIndex', uploadedChunks);  
      formData.append('totalChunks', totalChunks);  
  
      try {  
        // Replace with your actual API endpoint  
        await fetch('https://your-api-endpoint.com/upload', {  
          method: 'POST',  
          body: formData,  
        });  
  
        uploadedChunks++;  
        setUploadProgress((uploadedChunks / totalChunks) * 100);  
      } catch (error) {  
        console.error('Upload failed:', error);
        alert('Upload failed. Please try again.');
        // Consider implementing retry logic here
        return;  
      }  
    }  
  
    alert('File uploaded successfully! ');  
    setUploadProgress(0);  
    setFile(null);  
  };  
  
  return (  
    <div ref={scrollContainerRef} className="scroll-container" style={{ overflowY: 'auto', height: '300px' }}>  
      {items.map((item, index) => (  
        <div key={index}>{item.text}</div>  
      ))}  
      {isLoading && <div>Loading...</div>}  
      <button onClick={handleRefresh} style={{ marginTop: '10px' }}>Refresh</button>  
      
      <div style={{ marginTop: '20px' }}>  
        <input type="file" onChange={handleFileChange} />  
        <button onClick={handleUpload} disabled={!file}>  
          Upload  
        </button>  
        {uploadProgress > 0 && (  
          <div>  
            Upload Progress: {uploadProgress.toFixed(2)}%  
          </div>  
        )}  
      </div>  
    </div>  
  );  
};  
  
// 假设的API请求函数  
function fetchDataFromApi(page) {  
  return new Promise(resolve => {  
    // 模拟数据  
    setTimeout(() => {  
      const newData = Array.from({ length: 10 }, (_, i) => ({ text: `Item ${(page - 1) * 10 + i + 1}` }));  
      resolve(newData);  
    }, 1000);  
  });  
}  
  
export default InfiniteScrollComponent;