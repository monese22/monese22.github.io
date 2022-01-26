import { MovieData } from 'lib/posts';

import Card from '../cards/Card';

export default function Movies({
  allMoviesData,
}: {
  allMoviesData: MovieData[];
}) {
  return (
    <div className='grid grid-cols-2 gap-y-10 gap-x-20 md:grid-cols-4'>
      {allMoviesData.map((data) => {
        const href = `/details/${data.id}`;
        return (
          <Card
            key={data.title}
            href={href}
            imdbRating={data.imdbRating}
            posterPath={data.poster.small}
            posterName={data.title}
            title={data.title}
            releaseYear={data.releaseYear}
          />
        );
      })}
    </div>
  );
}
