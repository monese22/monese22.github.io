import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getAllMovieIds, getMovieData, MovieData } from '@/lib/posts';

import Genre from '@/components/Genre';
import NextImage from '@/components/NextImage';

export default function MovieDetailPost({
  movieData,
}: {
  movieData: MovieData;
}) {
  return (
    <>
      <Head>
        <title>{movieData.title}</title>
      </Head>

      <section className='max-w-[1160px] text-mnWhite mx-auto mt-5'>
        <div className='flex space-x-4'>
          <NextImage
            src={movieData.poster.small}
            width={168}
            height={251}
            alt={movieData.id}
          />

          <section className='flex flex-col gap-2'>
            <h3>
              {movieData.title} ({movieData.releaseYear})
            </h3>

            <div className='text-mnWhite/50'>
              <span className='pr-20'>IMDB - {movieData.imdbRating}</span>{' '}
              <span>Duration: {movieData.duration}</span>
            </div>

            <div className='flex gap-10'>
              {movieData.genres.map((genre) => (
                <Genre
                  key={genre}
                  genre={genre}
                  className='border-mnWhite/50 text-mnWhite/50 px-4 py-1 rounded-full'
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postIds = getAllMovieIds();
  const paths = postIds.map((id) => ({
    params: {
      postId: id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.postId;
  const movieData = getMovieData(id as string);

  return {
    props: {
      movieData,
    },
  };
};
