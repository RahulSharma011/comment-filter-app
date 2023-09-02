import React from 'react';

function CommentDetails({ selectedPost, comments }) {
  return (
    <div className="comment-details">
      {selectedPost && (
        <div className='p-1'>
          <h2 className='font-bold uppercase'>Name : <span className='text-blue-500 underline'>{selectedPost.name}</span></h2>
          <p className='font-bold'>Email: <span className='lowercase text-blue-600'>{selectedPost.email}</span></p>
          <p><span className='font-bold'>Body:</span> {selectedPost.body}</p>
          <h3 className='font-bold mt-3 underline'>Comments</h3>
          <ul>
            {comments
              .filter(comment => comment.postId === selectedPost.postId)
              .map(comment => (
                <li key={comment.id}>
                  <strong>{comment.name}</strong>: {comment.body}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CommentDetails;
