import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyResumes from '../Pages/MyResumes';

const mockStore = configureStore([]);
const store = mockStore({
  selectedTemplateReducer: { selectedTemplateId: null },
});

describe('MyResumes component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MyResumes />
      </Provider>
    );

    expect(screen.getByText(/My Resumes/i)).toBeInTheDocument();
  });

  it('displays no resumes message when there are no resumes', () => {
    render(
      <Provider store={store}>
        <MyResumes />
      </Provider>
    );

    expect(screen.getByText(/You do not have any Resumes yet./i)).toBeInTheDocument();
  });
});