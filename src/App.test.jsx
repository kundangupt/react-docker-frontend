import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should render the Login button", () => {
    render(<App />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});
