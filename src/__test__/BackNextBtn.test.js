import React from 'react';
import { render, screen } from '@testing-library/react';
import BackNextBtn from '../Components/BackNextBtn';

test('finds elements by class name', () => {
  render(<BackNextBtn />);
  const backBtn = screen.getByClassName('back-next-btn-continer');
  expect(backBtn).toBeInTheDocument();
});
