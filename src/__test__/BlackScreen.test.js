import React from 'react';
import { render, screen } from '@testing-library/react';
import BlackScreen from '../Components/BlackScreen';

test('renders BlackScreen component', () => {
  render(<BlackScreen />);
  const counterContainer = screen.getByClassName('black-screen');
  expect(counterContainer).toBeInTheDocument();
});