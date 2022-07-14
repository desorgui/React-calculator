import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CalculatorPage from '../components/pages/CalculatorPage';

test("renders the correct content", () => {
  const { getByText } = render(<CalculatorPage />);

  fireEvent.click(getByText("6"));
  fireEvent.click(getByText("x"));
  fireEvent.click(getByText("8"));
  fireEvent.click(getByText("="));

  expect(screen.getByRole("result-show")).toHaveValue("48");
});