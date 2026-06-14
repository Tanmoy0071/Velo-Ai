'use client';

import { SignIn } from '@insforge/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <SignIn signUpUrl="/sign-up" forgotPasswordUrl="/forgot-password" />
      </div>
    </div>
  );
}
