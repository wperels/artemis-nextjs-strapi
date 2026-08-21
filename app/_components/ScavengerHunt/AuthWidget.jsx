// app/_components/ScavengerHunt/AuthWidget.jsx
'use client';

import { useState } from 'react';
//import styles from './auth-widget.scss';
import SigninForm from './signin-form';
import SignupForm from './signup-form';

export default function AuthWidget() {
  const [mode, setMode] = useState('signup'); // default view

  return (
    <div className="auth-widget">
      {mode === 'signup' ? <SignupForm /> : <SigninForm />}

      <p className="auth-toggle">
        {mode === 'signup' ? (
          <>
            Already have an account?{' '}
            <button type="button" onClick={() => setMode('signin')}>
              Log in
            </button>
          </>
        ) : (
          <>
            Need an account?{' '}
            <button type="button" onClick={() => setMode('signup')}>
              Sign up
            </button>
          </>
        )}
      </p>
    </div>
  );
}