import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DetailsFilling from '../Pages/DetailsFilling';


describe('DetailsFilling', () => {
  it('renders correctly', () => {
    render(<DetailsFilling tab={0} />);

    // Check if the component renders without crashing
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Key Skills')).toBeInTheDocument();
  });

  it('handles tab click', () => {
    render(<DetailsFilling tab={0} />);

    // Click on the "Work Experience" tab
    userEvent.click(screen.getByText('Work Experience'));

    // Check if the click handler is working and the tab is highlighted
    expect(screen.getByText('Work Experience')).toHaveStyle('color: rgb(0, 128, 255)');
  });

  it('handles menu click on smaller screens', () => {
    render(<DetailsFilling tab={0} />);

    // Click on the more button to open the menu
    userEvent.click(screen.getByLabelText('more'));

    // Click on the "Education" menu item
    userEvent.click(screen.getByText('Education'));

    // Check if the click handler is working and the menu item is highlighted
    expect(screen.getByText('Education')).toHaveStyle('color: rgb(0, 128, 255)');
  });

  it('handles window resize', () => {
    // Mock window resize
    global.innerWidth = 500;

    render(<DetailsFilling tab={0} />);

    // Check if the component renders the menu for smaller screens
    expect(screen.getByLabelText('more')).toBeInTheDocument();
  });
});