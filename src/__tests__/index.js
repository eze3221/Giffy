import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('renders without crashing', () => {
  render(<App />);
  const title = screen.getByText(/TRENDING GIFS/i);
  expect(title).toBeInTheDocument();
});


