import React, { useState } from 'react';
import axios from 'axios';

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body: 'Sample body', userId: 1 };
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    onPostCreated(response.data);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;