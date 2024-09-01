import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import App from './app';

test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText(/Welcome/)).toBeInTheDocument();
});
