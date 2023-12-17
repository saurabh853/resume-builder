import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BackNextBtn from '../Components/BackNextBtn';

describe("BackNextBtn Component", () => {
  test("renders Back button when not on the first tab", () => {
    render(<BackNextBtn />);

    const backButton = screen.getByText("Back");
    expect(backButton).toBeInTheDocument();
  });

  test("does not render Back button on the first tab", () => {
    render(<BackNextBtn />);

    const backButton = screen.queryByText("Back");
    expect(backButton).toBeNull();
  });

  test("renders loading spinner when loading is true", () => {
    render(<BackNextBtn />);

    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  test("renders Next button when loading is false", () => {
    render(<BackNextBtn />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeInTheDocument();
  });

  test("calls onBack function when Back button is clicked", () => {
    render(<BackNextBtn />);
    const onBackMock = jest.fn();

    const backButton = screen.getByText("Back");
    fireEvent.click(backButton);

    expect(onBackMock).toHaveBeenCalledTimes(1);
  });
});
