import React, { useState, useEffect } from 'react';

function WorkerComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 发送数据到 Worker 的函数示例
  const sendData = async () => {
    try {
      const response = await fetch('https://first-worker.izyk-me.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }),
      });
      
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data from Cloudflare Worker</h2>
      <p>Message: {data?.message}</p>
      <p>Timestamp: {data?.timestamp}</p>
      <button onClick={sendData}>Send Data to Worker</button>
    </div>
  );
}

export default WorkerComponent;