import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Pizzabibka', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pizzabibka/i);
  expect(linkElement).toBeInTheDocument();
});
