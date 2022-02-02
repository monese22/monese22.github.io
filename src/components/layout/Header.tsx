import * as React from 'react';

import Navigations from '../Navigations';
import Search from '../Search';
import SiteLogo from '../SiteLogo';

export default function Header() {
  return (
    <header className='bg-mnHeaderBg text-mnWhite sticky top-0 z-50'>
      <div className='max-w-[1160px] flex justify-between items-center py-2 mx-auto'>
        <SiteLogo />
        <Navigations />
        <Search />
      </div>
    </header>
  );
}
