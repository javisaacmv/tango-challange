import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders title", () => {
  render(<App />);
  const title = screen.getByText(/calculate fibonacci!/i);
  expect(title).toBeInTheDocument();
});

test("Render elements", async () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Number");
  const button = screen.getByTestId("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
