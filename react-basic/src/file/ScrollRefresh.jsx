import React, { useState, useEffect } from 'react';  
  
const InfiniteScrollComponent = () => {  
  const [items, setItems] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);  
  const [page, setPage] = useState(1);  
  const [refreshing, setRefreshing] = useState(false);  
  
  useEffect(() => {  
    const fetchData = async () => {  
      setIsLoading(true);  
      try {  
        // 模拟API请求  
        const newData = await fetchDataFromApi(page); // 假设这是你的API调用函数  
        setItems(prevItems => [...prevItems, ...newData]);  
      } catch (error) {  
        console.error("Failed to fetch data:", error);  
      }  
      setIsLoading(false);  
    };  
  
    if (!refreshing) {  
      fetchData();  
    }  
  }, [page, refreshing]);  
  
  const handleRefresh = async () => {  
    setRefreshing(true);  
    setPage(1); // 重置到第一页  
    await fetchData(); // 重新加载数据  
    setRefreshing(false);  
  };  
  
  const handleScroll = () => {  
    const { scrollTop, scrollHeight, clientHeight } = document.querySelector('.scroll-container');  
    if (scrollTop + clientHeight >= scrollHeight - 10) { // 接近底部时加载  
      setPage(prevPage => prevPage + 1);  
    }  
  };  
  
  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []);  
  
  return (  
    <div className="scroll-container" onScroll={handleScroll} style={{ overflowY: 'auto', height: '300px' }}>  
      {items.map((item, index) => (  
        <div key={index}>{item.text}</div>  
      ))}  
      {isLoading && <div>Loading...</div>}  
      <button onClick={handleRefresh} style={{ marginTop: '10px' }}>Refresh</button>  
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