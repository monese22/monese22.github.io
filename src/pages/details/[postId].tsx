import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { getAllMovieIds, getMovieData } from '@/lib/posts';

import NextImage from '@/components/NextImage';

export default function MovieDetailPost({
  movieData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
          <section>
            <h3>
              {movieData.title} ({movieData.release})
            </h3>
            <span className='pr-20'>IMDB - {movieData.imdbRating}</span>{' '}
            <span>Duration: {movieData.duration}</span>
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
