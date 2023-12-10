import React from 'react';
import { render, screen } from '@testing-library/react';
import MyResumes from '../Pages/MyResumes';

test('finds elements by class name', () => {
  render(<MyResumes />);
  const myResumes = screen.getByClassName('my-resumes');
  expect(myResumes).toBeInTheDocument();
});
