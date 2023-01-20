import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { beerUrl, beersUrl } from 'constants/index';

export function Header() {
  const router = useRouter();

  const canBack = useMemo(() => {
    return router.route === `${beerUrl}/[id]`;
  }, [router.route]);

  console.log(router);

  return (
    <nav 
      className="navbar text-bg-success bg-gradient p-3"
      data-bs-theme="succes"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand link-light"
          href={beersUrl}
        >
          {canBack && 'back to '}
          NextJS Punk Api
        </Link>
      </div>

    </nav>
  );
}
