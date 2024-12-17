import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreatePostForm from './CreatePostForm';
import axios from 'axios';

jest.mock('axios');

describe('CreatePostForm', () => {
  it('creates a new post', async () => {
    const newPost = { id: 1, title: 'New Post', body: 'Sample body', userId: 1 };
    axios.post.mockResolvedValueOnce({ data: newPost });

    const onPostCreated = jest.fn();
    render(<CreatePostForm onPostCreated={onPostCreated} />);

    fireEvent.change(screen.getByPlaceholderText('Post Title'), { target: { value: 'New Post' } });
    fireEvent.click(screen.getByText('Create Post'));

    expect(onPostCreated).toHaveBeenCalledWith(newPost);
  });
});