'use client';

import { ResetPassword } from '@insforge/nextjs';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <ResetPassword backToSignInUrl="/sign-in" />
      </div>
    </div>
  );
}
