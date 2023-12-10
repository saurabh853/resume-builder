import React from 'react';
import { render, screen } from '@testing-library/react';
import BlackScreen from '../Components/BlackScreen';

test('finds elements by class name', () => {
  render(<BlackScreen />);
  const counterContainer = screen.getByClassName('black-screen');
  expect(counterContainer).toBeInTheDocument();
});
