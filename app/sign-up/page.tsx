'use client';

import { SignUp } from '@insforge/nextjs';

export default function SignUpPage() {
  const emailRedirectTo =
    typeof window !== 'undefined' ? `${window.location.origin}/sign-in` : undefined;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <SignUp signInUrl="/sign-in" emailRedirectTo={emailRedirectTo} />
      </div>
    </div>
  );
}
