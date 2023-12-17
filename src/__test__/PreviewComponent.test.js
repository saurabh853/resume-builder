import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PreviewComponent from '../Components/PreviewComponent';

const mockStore = configureStore([]);

// Mock Redux state
const initialState = {
  selectedTemplateReducer: {
    selectedTemplateId: 1,
    selectedResumeId: 1,
  },
  personalInfoReducer: {
    personalInfo: {
      first_name: "Saurabh",
      last_name: "Tiwari",
      email: "saurabhtiwari9825@gmail.com",
      mobile: "+916325986575",
      address: "5 345 Subh Recidency Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      postal_code: "654789",
      objective:
        "Take a tour of our Full Stack Data Science Course to learn about curriculum, assesments and projects designed to help you build a career in data science. Take a tour of our Full Stack Data Science Course to learn about curriculum.",
    },
  },
  workExperienceReducer: {
    experiences: [],
  },
  educationDetailsReducer: {
    educationInfo: [],
  },
  keySkillsReducer: {
    skills: [],
  },
};

test('renders PreviewComponent', () => {
  // Render the component with mocked store and state
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <PreviewComponent />
    </Provider>
  );

  const backButton = screen.getByText('Back');
  expect(backButton).toBeInTheDocument();
  
  const inputField = screen.getByLabelText('Create File Name');
  expect(inputField).toBeInTheDocument();
  
  fireEvent.change(inputField, { target: { value: 'TestResume' } });
  
  expect(inputField.value).toBe('TestResume');
  
  const saveButton = screen.getByText('Save');
  expect(saveButton).toBeInTheDocument();
});