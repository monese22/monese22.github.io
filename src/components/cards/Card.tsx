import UnstyledLink from '../links/UnstyledLink';
import NextImage from '../NextImage';

// interface CardProps {
//   href: string,
//   rating: number,
//   poster: string,
//   name: string,
// }

export default function Card() {
  return (
    <UnstyledLink
      href='#'
      className='shadow-gray-700 w-[230px] block h-auto text-center rounded-md shadow'
    >
      <div className='relative'>
        <span className='absolute top-2 left-2 z-10 p-1 text-xs text-black bg-yellow-300 rounded'>
          IMDB - 8.5
        </span>
        <NextImage
          src='/images/posters/SpiderMan 1.png'
          width={230}
          height={340}
          alt='Spyder Man Poster'
        />
        <span className='block py-2'>Spyder-Man - Far From Home (2020)</span>
      </div>
    </UnstyledLink>
  );
}
