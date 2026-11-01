'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const GlobalBackground3D = dynamic(() => import('./GlobalBackground3D'), {
  ssr: false,
});

export default function GlobalBackgroundContainer() {
  return <GlobalBackground3D />;
}
