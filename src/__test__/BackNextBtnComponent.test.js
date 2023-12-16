import React from 'react';
import { render, screen } from '@testing-library/react';
import BackNextBtnComponent from '../Components/BackNextBtnComponent';

test('finds elements by class name', () => {
  render(<BackNextBtnComponent />);
  const backBtn = screen.getByClassName('back-next-btn-continer');
  expect(backBtn).toBeInTheDocument();
});
