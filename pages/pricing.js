// Paywall hidden for the community window. Original preserved in
// .snapshots/. To restore, copy the snapshot's pages/pricing.js back.
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Pricing() {
  const router = useRouter();
  useEffect(() => { router.replace('/'); }, [router]);
  return null;
}
