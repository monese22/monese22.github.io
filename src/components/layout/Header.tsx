import Image from 'next/image';
import * as React from 'react';

import UnstyledLink from '../links/UnstyledLink';

// this is dummy data for navigation bar, and it must be redesign
const dummyNavItems = [
  'Movies',
  'Series',
  'Shorts',
  'Genere',
  'Years',
  'How to Download',
];

export default function Header() {
  return (
    <header className='bg-mnHeaderBg text-mnWhite sticky top-0 z-50'>
      <div className='max-w-[1160px] flex justify-between items-center py-2 mx-auto'>
        <UnstyledLink href='/' className='flex items-center'>
          <Image
            src='/images/MoneseLogo.svg'
            width={40}
            height={40}
            alt='monese-logo'
            className='rounded-md'
          />
          <span className='pl-2 text-2xl font-semibold uppercase'>Monsese</span>
        </UnstyledLink>
        {/* This part need to change when implementing data */}
        <nav className='text-mnWhite/80 text-semibold space-x-6'>
          {dummyNavItems.map((nav) => (
            <UnstyledLink
              href='#'
              key={nav}
              className='font-semibold transition hover:text-white'
            >
              {nav}{' '}
            </UnstyledLink>
          ))}
        </nav>
        {/* search bar */}
        <div className='relative w-1/4 h-auto rounded-full'>
          <div className='absolute'>
            <svg
              className='text-mnwhite ml-2 w-8 h-10 scale-50 translate-y-1 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              spacing='preserve'
            >
              <path d='M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 0 0 3.535 0 2.496 2.496 0 0 0 0-3.535l-6.718-6.72a2.5 2.5 0 0 0-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z' />
            </svg>
          </div>
          <form action='#'>
            <input
              type='text'
              placeholder='Search'
              id='search'
              className='pl-10 w-full bg-transparent rounded-full transition-all duration-300 hover:placeholder:text-mnWhite'
            />
          </form>
        </div>
      </div>
    </header>
  );
}
