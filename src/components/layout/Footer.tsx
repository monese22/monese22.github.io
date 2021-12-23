import * as React from 'react';

import Button from '../buttons/Button';
import UnstyledLink from '../links/UnstyledLink';
import NextImage from '../NextImage';

const images = [
  { name: '/images/YouTube.svg' },
  { name: '/images/Facebook.svg' },
  { name: '/images/TikTok.svg' },
  { name: '/images/Telegram App.svg' },
];

export default function Footer() {
  return (
    <footer className='bg-mnFooterBg flex justify-evenly py-10 mt-10'>
      <div className='flex flex-col items-center'>
        {/* Logo */}
        <UnstyledLink href='/'>
          <NextImage
            src='/images/MoneseLogo.svg'
            width={95}
            height={95}
            alt='monese-logo'
          />
          <span className='text-mnWhite text-2xl font-bold uppercase'>
            Monese
          </span>
        </UnstyledLink>

        <div className='flex'>
          {/* need hyperlink to link to the social media */}
          {images.map((img) => (
            <NextImage
              key={img.name}
              src={img.name}
              height={40}
              width={40}
              alt={img.name}
            />
          ))}
        </div>
      </div>

      <div className='text-mnWhite space-y-6 w-96'>
        <h2>Donate Us</h2>
        <p>
          Donate us to help support this Monese Website &#38; our Mon community.{' '}
        </p>
        <Button variant='dark' className='rounded-full'>
          &#36; Donate Now
        </Button>
      </div>
    </footer>
  );
}
