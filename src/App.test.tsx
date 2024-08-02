import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page text', () => {
  render(<App />);
  const homePageText = screen.getByText(/This is home page/i);
  expect(homePageText).toBeInTheDocument();
});
