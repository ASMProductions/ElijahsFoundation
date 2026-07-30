// Sign-in hidden for the community window (no gate while open).
// Original preserved in .snapshots/. To restore, copy the snapshot's
// pages/login.js back.
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  useEffect(() => { router.replace('/'); }, [router]);
  return null;
}
