import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("<Button />", () => {
  it("should render", () => {
    render(<App />);
    expect(screen.getByText(/React Skeleton App/i)).toBeInTheDocument();
    expect(true).toBe(true);
  });
});
