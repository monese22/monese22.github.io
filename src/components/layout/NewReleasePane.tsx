import NextImage from '../NextImage';

export default function NewReleasePane() {
  return (
    <div>
      {/* image name need to be dynamic and need to add hyper link */}
      <span>New releases:</span>
      <div className='h-[400px] w-[1160px] overflow-hidden rounded-xl'>
        <NextImage
          src='/images/posters/shang-chi-1.png'
          width={1160}
          height={400}
          alt='shang-chi'
        />
      </div>
    </div>
  );
}
