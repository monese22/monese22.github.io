import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='bg-mnBg'>
      <Header />
      <div className='max-w-[1140px] flex flex-col gap-16 mx-auto mt-10'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
