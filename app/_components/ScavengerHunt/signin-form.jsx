"use client";

import { useActionState, useState } from "react";
import { loginUserAction } from "@/data/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState = { success: false };

export default function SigninForm() {
  const [state, formAction, isPending] = useActionState(
    loginUserAction,
    initialState
  );
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form className="auth-card" action={formAction}>
      <h2 className="auth-card__title">Sign in</h2>

      <div className="auth-card__fields">
        <Input
          className="auth-card__input"
          id="signin-identifier"
          name="identifier"
          type="text"
          placeholder="Email or username"
          autoComplete="username"
          required
        />

        <div className="auth-card__password-field">
          <Input
            className="auth-card__input auth-card__input--password"
            id="signin-password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
            required
          />

          <button
            className="auth-card__password-toggle"
            type="button"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-controls="signin-password"
            aria-label={
              isPasswordVisible ? "Hide password" : "Show password"
            }
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {state?.message ? (
        <p className="auth-card__message" role="alert" aria-live="polite">
          {state.message}
        </p>
      ) : null}

      <Button
        className="auth-card__submit"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}