// app/_components/ScavengerHunt/AuthWidget.jsx
'use client';

import { useState } from 'react';
import SigninForm from './signin-form';
import SignupForm from './signup-form';

export default function AuthWidget() {
  const [mode, setMode] = useState('signup'); // default view

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {mode === 'signup' ? <SignupForm /> : <SigninForm />}

      <p className="text-sm text-muted-foreground">
        {mode === 'signup' ? (
          <>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setMode('signin')}
              className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
            >
              Log in
            </button>
          </>
        ) : (
          <>
            Need an account?{' '}
            <button
              type="button"
              onClick={() => setMode('signup')}
              className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
            >
              Sign up
            </button>
          </>
        )}
      </p>
    </div>
  );
}