"use client";

import { useActionState, useState } from "react";
import { registerUserAction } from "@/data/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState = { success: false };

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(
    registerUserAction,
    initialState
  );
  const [clientError, setClientError] = useState("");

  function handleSubmit(event) {
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      event.preventDefault();
      setClientError("Passwords do not match.");
      return;
    }

    setClientError("");
  }

  const message = clientError || state?.message;

  return (
    <form className="auth-card" action={formAction} onSubmit={handleSubmit}>
      <h2 className="auth-card__title">Signup</h2>

      <div className="auth-card__fields">
        <Input
          className="auth-card__input"
          id="signup-username"
          name="username"
          type="text"
          placeholder="Username"
          autoComplete="username"
          required
        />

        <Input
          className="auth-card__input"
          id="signup-email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
        />

        <Input
          className="auth-card__input"
          id="signup-password"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          required
        />

        <Input
          className="auth-card__input"
          id="signup-confirm-password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          autoComplete="new-password"
          required
        />
      </div>

      {message ? (
        <p className="auth-card__message" role="alert" aria-live="polite">
          {message}
        </p>
      ) : null}

      <Button
        className="auth-card__submit"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}