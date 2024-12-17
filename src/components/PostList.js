import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = ({ posts, onPostUpdated }) => {
  const [postList, setPostList] = useState(posts);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPostList(postList.filter(post => post.id !== id));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <UpdatePostForm post={post} onPostUpdated={onPostUpdated} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;