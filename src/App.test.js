import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Covid-19 Solidarity Response Fund/i);
  expect(title).toBeInTheDocument();
});
