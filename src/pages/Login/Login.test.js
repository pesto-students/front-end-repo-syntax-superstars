import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Login from "./Login";

describe("LoginForm", () => {
  it("renders the login form", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("allows users to fill out and submit the form", async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Welcome, testuser!")).toBeInTheDocument();
    });
  });

  it("displays an error message on invalid login", async () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "invalidEmail" } });
    fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
    });
  });
});
