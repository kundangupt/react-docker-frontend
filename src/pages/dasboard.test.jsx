import { render, screen } from "@testing-library/react";
import Dashboard from "../dasboard";

describe("Dashboard Page", () => {
  test("renders dashboard heading", () => {
    render(<Dashboard />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  test("renders stats section", () => {
    render(<Dashboard />);
    expect(screen.getByText("Total Users: 120")).toBeInTheDocument();
    expect(screen.getByText("Active Sessions: 34")).toBeInTheDocument();
    expect(screen.getByText("Errors Today: 2")).toBeInTheDocument();
  });

  test("dashboard container exists", () => {
    render(<Dashboard />);
    expect(screen.getByTestId("dashboard-page")).toBeInTheDocument();
  });
});
