import UnstyledLink from '../links/UnstyledLink';

export type CardProps = {
  href: string; // route to detail page
  imdbRating: number;
  posterPath: string; // path which is used to render the image
  posterName: string; // used in image `alt` attribute
  title: string;
  releaseYear: number;
};

export default function Card(props: CardProps) {
  return (
    <UnstyledLink
      href={props.href}
      className='text-mnWhite w-[230px] block overflow-hidden h-auto text-center rounded-md shadow'
    >
      <div className='relative'>
        <span className='absolute top-2 left-2 z-10 p-1 text-xs text-black bg-yellow-300 rounded'>
          IMDB - {props.imdbRating}
        </span>

        <img
          src={props.posterPath}
          width={230}
          height={340}
          alt={props.posterName}
        />

        <span className='block py-2'>
          {props.title} ({props.releaseYear})
        </span>
      </div>
    </UnstyledLink>
  );
}
