import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

test('finds elements by class name', () => {
  render(<Home />);
  const home = screen.getByClassName('home');
  expect(home).toBeInTheDocument();
});
