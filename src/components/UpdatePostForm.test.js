import React from 'react';
import { render , screen, fireEvent } from '@testing-library/react';
import UpdatePostForm from './UpdatePostForm';
import axios from 'axios';

jest.mock('axios');

describe('UpdatePostForm', () => {
  it('updates an existing post', async () => {
    const post = { id: 1, title: 'Old Title' };
    const updatedPost = { ...post, title: 'Updated Title' };
    axios.put.mockResolvedValueOnce({ data: updatedPost });

    const onPostUpdated = jest.fn();
    render(<UpdatePostForm post={post} onPostUpdated={onPostUpdated} />);

    fireEvent.change(screen.getByDisplayValue('Old Title'), { target: { value: 'Updated Title' } });
    fireEvent.click(screen.getByText('Update Post'));

    expect(onPostUpdated).toHaveBeenCalledWith(updatedPost);
  });
});