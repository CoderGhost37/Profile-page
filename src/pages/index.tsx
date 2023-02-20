import Link from 'next/link';
import * as React from 'react';

import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />
      <Link href='/edit/profile'>Edit Profile</Link>
    </>
  );
}
