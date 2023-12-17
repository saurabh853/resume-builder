import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EducationComponent from '../Components/EducationComponent';

// Mock Redux store
const mockStore = configureStore([]);

describe('EducationComponent', () => {
  let store;

  // Mocked Redux state
  const initialState = {
    educationDetailsReducer: {
      educationInfo: {
        university: '',
        degree: '',
        startYear: '',
        endYear: '',
      },
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders with the initial state', () => {
    render(
      <Provider store={store}>
        <EducationComponent />
      </Provider>
    );

    expect(screen.getByText('Education Details')).toBeInTheDocument();
    expect(screen.getByText('University')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(
      <Provider store={store}>
        <EducationComponent />
      </Provider>
    );

    // Trigger a form submission, you can use userEvent or fireEvent
    userEvent.click(screen.getByText('Next'));

    // Assert that the loading state is triggered
    // Make sure your component displays 'Loading...' during form submission
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });
  });
});

