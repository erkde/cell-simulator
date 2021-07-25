import { render, screen } from '@testing-library/react';

import { Board } from './Board';

test('renders a cell for each row/column', () => {
  render(<Board rows={6} columns={6} />);
  expect(screen.getAllByRole("checkbox")).toHaveLength(6 * 6);
});
