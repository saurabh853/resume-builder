import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonMUI from '../Pages/AboutUs';

test('renders AboutUs component', () => {
  render(<ButtonMUI />);
  const aboutResumeImage = screen.getByClassName('aboutResumeImage');
  expect(aboutResumeImage).toBeInTheDocument();
});
