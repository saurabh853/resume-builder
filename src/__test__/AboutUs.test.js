import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonMUI from '../Pages/AboutUs';

test('finds elements by class name', () => {
  render(<ButtonMUI />);
  const aboutResumeImage = screen.getByClassName('aboutResumeImage');
  expect(aboutResumeImage).toBeInTheDocument();
});
