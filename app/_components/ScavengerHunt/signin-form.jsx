"use client";

import { useActionState } from "react";
import { loginUserAction } from "@/data/actions/auth";

const initialState = { success: false };

export default function SigninForm() {
  const [state, formAction, isPending] = useActionState(loginUserAction, initialState);

  return (
    <div className="signup-form">
      <form action={formAction} className="signup-form__form">
        <input name="identifier" placeholder="Email or username" required className="input" />
        <input name="password" type="password" placeholder="Password" required className="input" />

        {state?.message && <p className="signup-form__error">{state.message}</p>}

        <button type="submit" disabled={isPending} className="btn btn--medium btn--black">
          {isPending ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}