//cau3
import React, { useEffect, useState } from "react";
import "./FetchData.css"; // Import file CSS riêng

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h2 className="title">Danh sách bài viết</h2>
      <ul className="post-list">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
