import Button from '../buttons/Button';
import NextImage from '../NextImage';

// type of props for each of the movie
// type MovieProps = {
//   title: string,
//   href: string,
//   posterPath: string,
//   posterName: string,
// }

// // type of props for all new release movies
// type NewReleaseProps = {
//   newReleases: MovieProps[],
// }

export default function NewReleasePane() {
  return (
    <div className='relative'>
      {/* image name need to be dynamic and need to add hyper link */}

      <span className='text-mnWhite text-lg font-semibold'>New releases:</span>
      <div className='h-[400px] max-w-[1160px] overflow-hidden relative mt-1 rounded-xl'>
        <NextImage
          src='/images/posters/shang-chi-and-the-legend-of-the-ten-rings/shang-chi-large.png'
          width={1160}
          height={400}
          alt='shang-chi'
          className='absolute z-0'
        />

        {/* chevron left */}
        <Button
          variant='dark'
          className='bg-gray-300/50 absolute left-5 top-1/2 z-20 px-2 py-2 rounded-full -translate-y-1/2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </Button>

        {/* chevron right */}
        <Button
          variant='dark'
          className='bg-gray-300/50 absolute right-5 top-1/2 px-2 py-2 rounded-full -translate-y-1/2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </Button>

        <span className='text-mnWhite absolute bottom-2 left-2 text-2xl font-semibold'>
          Shang-Chi and The Legend of The Ten Rings
        </span>
      </div>
    </div>
  );
}
