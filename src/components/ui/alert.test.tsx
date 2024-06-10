import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Alert, AlertDescription, AlertTitle } from "./alert";

describe("Alert", () => {
  // test default alert
  it("renders the alert with correct text", () => {
    render(
      <Alert>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your account has been successfully created.
        </AlertDescription>
      </Alert>
    );
    // by role role="alert"
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });

  // test destructive alert
  it("renders the alert with correct text", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error creating your account.
        </AlertDescription>
      </Alert>
    );
    // by has class
    const alertElement = screen.getByRole("alert");
    // has class
    expect(alertElement).toHaveClass("border-destructive/50");
    expect(alertElement).toBeInTheDocument();
  });
})