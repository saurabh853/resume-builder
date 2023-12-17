import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../Pages/Home';

const mockStore = configureStore([]);

// Mock the templates data
const mockTemplates = [
  {
    id: 1,
    template_img: 'template1.jpg',
    template_name: 'Template 1',
  },
  // Add more template data as needed
];

// Mock the Redux state
const initialState = {
  selectedTemplateReducer: {
    selectedTemplateId: null,
    selectedResumeId: null,
  },
  personalInfoReducer: {
    personalInfo: null,
  },
  workExperienceReducer: {
    experiences: [],
  },
  educationDetailsReducer: {
    educationInfo: null,
  },
  keySkillsReducer: {
    skills: [],
  },
};

// Test suite for the Home component
describe('Home component', () => {
  let store;

  // Set up the Redux store and render the component before each test
  beforeEach(() => {
    store = mockStore(initialState);
  });

  // Test case 1: Renders Home component correctly
  it('renders Home component correctly', () => {
    const { getByText, getAllByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Check if the component renders the template header title
    expect(screen.getByText('Templates')).toBeInTheDocument();

    // Check if the component renders the template images
    const templateImages = screen.getAllByAltText(/Template \d/);
    expect(templateImages.length).toBe(mockTemplates.length);
  });

  // Test case 2: Clicking on "Use Template" button triggers navigation
  it('navigates to fill-details page when "Use Template" button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    // Mock a function that will be called when the "Use Template" button is clicked
    const mockNavigate = jest.fn();

    // Replace the actual navigate function with the mockNavigate function
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    // Find the "Use Template" button and click on it
    fireEvent.click(screen.getByText('Use Template'));

    // Check if the mockNavigate function was called with the expected argument
    expect(mockNavigate).toHaveBeenCalledWith('/template/fill-details');
  });
});
