import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreated = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handlePostUpdated = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  };

  return (
    <div>
      <CreatePostForm onPostCreated={handlePostCreated} />
      <PostList posts={posts} onPostUpdated={handlePostUpdated} />
    </div>
  );
};

export default App;
