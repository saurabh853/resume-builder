import React from 'react';
import { render, screen } from '@testing-library/react';
import PreviewComponent from '../Components/PreviewComponent';

test('finds elements by class name', () => {
  render(<PreviewComponent />);
  const previewContainer = screen.getByClassName('preview-container');
  expect(previewContainer).toBeInTheDocument();
});
