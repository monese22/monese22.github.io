import Image from 'next/image';

import UnstyledLink from './links/UnstyledLink';

export default function SiteLogo() {
  return (
    <UnstyledLink href='/' className='flex gap-2 items-center'>
      <Image
        src={'/images/MoneseLogo.svg'}
        width={40}
        height={40}
        alt='monese-logo'
        className='rounded-md'
      />
      <span className='text-2xl font-semibold uppercase'>Monese</span>
    </UnstyledLink>
  );
}
