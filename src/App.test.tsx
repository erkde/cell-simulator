import { render, screen } from '@testing-library/react';

import App from './App';

test('renders a title', () => {
  render(<App />);
  expect(screen.getByRole('heading')).toHaveTextContent('Cell Simulator');
});
