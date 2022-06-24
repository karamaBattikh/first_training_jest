import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userMockData from 'mockData/user';

import Home from '.';

jest.mock('axios');

describe('Home Component', () => {
  test('Loading in screen', () => {
    axios.get.mockResolvedValue({ data: userMockData });
    render(<Home />);

    const text = screen.getByText('Loading...');
    expect(text).toBeInTheDocument();
  });

  test('title in screen', async () => {
    axios.get.mockResolvedValue({ data: userMockData });
    render(<Home />);

    const title = await waitFor(() => screen.getByText('Users'));
    expect(title).toBeInTheDocument();
  });

  test('displays list of users', async () => {
    axios.get.mockResolvedValue({ data: userMockData });

    render(<Home />);

    const userList = await waitFor(() => screen.getByTestId('user-list'));
    expect(userList).toBeInTheDocument();
  });
});
