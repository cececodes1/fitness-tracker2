import React, { useState } from 'react';
import axios from 'axios';

const UpdatePostForm = ({ post, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { ...post, title };
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, updatedPost);
    onPostUpdated(updatedPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default UpdatePostForm;