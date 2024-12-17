import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';
import axios from 'axios';

jest.mock('axios');

describe('PostList', () => {
  it('fetches and displays posts', async () => {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ];
    axios.get.mockResolvedValueOnce({ data: posts });

    render(<PostList posts={posts} onPostUpdated={() => {}} />);

    const postElements = await screen.findAllByRole('listitem');
    expect(postElements).toHaveLength(posts.length);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });
});