import { render, screen } from '@testing-library/react';

import { Cell } from './Cell';

test('renders a checkable element', () => {
  render(<Cell />);
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
});
