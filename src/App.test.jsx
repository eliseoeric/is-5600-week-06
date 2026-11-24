import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the product list', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByPlaceholderText(/tag search/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
});
