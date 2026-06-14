'use client';

import { ForgotPassword } from '@insforge/nextjs';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <ForgotPassword backToSignInUrl="/sign-in" />
      </div>
    </div>
  );
}
