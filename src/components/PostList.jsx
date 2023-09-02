import React, { useState } from 'react';

function PostList({ comments, setSelectedPost }) {
  const [postIdFilter, setPostIdFilter] = useState('');

  const handleFilter = (postId) => {
    setPostIdFilter(postId);
  }

  // Filter the comments to show only the first comment for each post
  const filteredComments = comments.reduce((result, comment) => {
    if (!postIdFilter || comment.postId === Number(postIdFilter)) {
      const existingPost = result.find(item => item.postId === comment.postId);
      if (!existingPost) {
        result.push(comment);
      }
    }
    return result;
  }, []);

  return (
    <div className="post-list">
      <div className='flex'>
        <input
          type="text"
          placeholder="Filter by postId"
          value={postIdFilter}
          className='border-4 rounded-lg'
          onChange={(e) => handleFilter(e.target.value)}
        />
        <select
          className='h-10 rounded-lg border-2 border-black px-3'
          value={postIdFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">-- Select Post ID --</option>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={(i + 1).toString()}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredComments.map(comment => (
          <li key={comment.id} onClick={() => setSelectedPost(comment)}>
            <span className='font-bold'>{comment.postId}.</span> {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
