import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./components/PostList";
import CommentDetails from "./components/CommentDetails";

function App() {
  const [comments, setComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Fetch comments here and update the 'comments' state.
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 100))); // Limit to the first 100 comments
  }, []);

  return (
    <div className="App">
      <PostList comments={comments} setSelectedPost={setSelectedPost} />
      <CommentDetails selectedPost={selectedPost} comments={comments} />
    </div>
  );
}

export default App;
