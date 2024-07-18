import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders Blockchain Greetings', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Blockchain Greetings/i);
  expect(linkElement).toBeInTheDocument();
});
