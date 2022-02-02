export default function Search() {
  return (
    <div className='border-mnWhite/80 group flex items-center p-1 max-w-xs h-10 rounded-full border-2 transition-all hover:border-mnWhite'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='text-mnWhite/80 mx-2 w-5 h-5 transition-all group-hover:text-mnWhite'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
        />
      </svg>
      <input
        placeholder='Search'
        type='text'
        className='inline-flex bg-transparent border-none focus:border-transparent focus:ring-0'
      />
    </div>
  );
}
