import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsFilling from '../Pages/DetailsFilling';

test('finds elements by class name', () => {
  render(<DetailsFilling />);
  const detailsFilling = screen.getByClassName('details-filling');
  expect(detailsFilling).toBeInTheDocument();
});
