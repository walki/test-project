import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users", () => {
  it("should render heading", () => {
    render(<Users />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });
});
