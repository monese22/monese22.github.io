import NextImage from '../NextImage';

export default function NewReleasePane() {
  return (
    <div className='relative'>
      {/* image name need to be dynamic and need to add hyper link */}
      <span className='text-lg font-semibold'>New releases:</span>
      <div className='h-[400px] w-[1160px] overflow-hidden mt-1 rounded-xl'>
        <NextImage
          src='/images/posters/shang-chi-1.png'
          width={1160}
          height={400}
          alt='shang-chi'
        />
        <span className='absolute bottom-2 left-2 text-2xl font-semibold'>
          Shang-Chi and The Legend of The Ten Rings
        </span>
      </div>
    </div>
  );
}
