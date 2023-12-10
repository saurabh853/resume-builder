import React from 'react';
import { render, screen } from '@testing-library/react';
import EducationComponent from '../Components/EducationComponent';

test('finds elements by class name', () => {
  render(<EducationComponent />);
  const educationContainer = screen.getByClassName('education-paper');
  expect(educationContainer).toBeInTheDocument();
});
