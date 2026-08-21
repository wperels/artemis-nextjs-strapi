"use client";

import { useActionState } from "react";
import { registerUserAction } from "@/data/actions/auth";

const initialState = { success: false };

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(registerUserAction, initialState);

  return (
    <div className="signup-form">
      <form action={formAction} className="signup-form__form">
        <input name="username" placeholder="Username" required className="input" />
        <input name="email" type="email" placeholder="Email" required className="input" />
        <input name="password" type="password" placeholder="Password" required minLength={6} className="input" />

        {state?.message && <p className="signup-form__error">{state.message}</p>}

        <button type="submit" disabled={isPending} className="btn btn--medium btn--black">
          {isPending ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </div>
  );
}