import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function NewReleasePane() {
  return (
    <div className='relative'>
      {/* image name need to be dynamic and need to add hyper link */}

      <span className='text-mnWhite text-lg font-semibold'>New releases:</span>
      <div className='h-[400px] max-w-[1160px] overflow-hidden relative mt-1 rounded-xl'>
        <img
          src='/images/posters/movies/shang-chi-and-the-legend-of-the-ten-rings/shang-chi-large.png'
          width={1160}
          height={400}
          alt='shang-chi'
          className='absolute z-0'
        />

        {/* chevron left */}
        <button className='bg-gray-800/50 text-mnWhite/80 absolute left-5 top-1/2 z-20 px-4 py-4 rounded-full transition -translate-y-1/2 hover:bg-gray-800/70 hover:text-mnWhite'>
          <FaChevronLeft />
        </button>

        {/* chevron right */}
        <button className='bg-gray-800/50 text-mnWhite/80 absolute right-5 top-1/2 px-4 py-4 rounded-full transition -translate-y-1/2 hover:bg-gray-800/70 hover:text-mnWhite'>
          <FaChevronRight />
        </button>

        <span className='text-mnWhite absolute bottom-2 left-2 text-2xl font-semibold'>
          Shang-Chi and The Legend of The Ten Rings
        </span>
      </div>
    </div>
  );
}
