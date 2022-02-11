import Card from '../card/Card';

import { Category, MovieData } from '@/types';

export default function Cards({
  allMoviesData,
  category,
}: {
  allMoviesData: MovieData[];
  category: Category;
}) {
  return (
    <div className='grid grid-cols-2 gap-y-10 gap-x-20 md:grid-cols-4'>
      {allMoviesData.map((data) => {
        const href = `/${category}/${data.slug}`;
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
