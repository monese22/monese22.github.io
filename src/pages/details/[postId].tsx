import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { getAllMovieIds, getMovieData, MovieData } from '@/lib/posts';

import Genre from '@/components/Genre';
import Downloads from '@/components/layout/Downloads';
import MainAds from '@/components/layout/MainAds';
import SidePane from '@/components/layout/SidePane';
import NextImage from '@/components/NextImage';

export default function MovieDetailPost({
  movieData,
}: {
  movieData: MovieData;
}) {
  return (
    <div className='max-w-[1160px] flex gap-4 mx-auto my-10 space-x-12 divide-x divide-solid'>
      <Head>
        <title>{movieData.title}</title>
      </Head>

      {/* left section */}
      <section className='basis-8/12 text-mnWhite space-y-10'>
        {/* poster image and movies name */}
        <section className='flex space-x-4'>
          <NextImage
            src={movieData.poster.small}
            width={168}
            height={251}
            alt={movieData.id}
          />

          {/* wrapper for right side of the image */}
          <div className='flex flex-col gap-2'>
            <h3>
              {movieData.title} ({movieData.releaseYear})
            </h3>

            <div className='text-mnWhite/50 uppercase'>
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

            {/* TODO need to add watch trailer */}
          </div>
          {/* --- end of poster right side */}
        </section>
        {/* --- end of poster and movies title section  */}

        {/* story line, ads and download section */}
        <section className='space-y-10'>
          {/* story line and cast */}
          <div
            className='space-y-4'
            dangerouslySetInnerHTML={{ __html: movieData.contentHtml }}
          />

          <MainAds />
          <Downloads downloads={movieData.downloads} />
          <MainAds />
        </section>
      </section>
      {/* --- end of left section */}

      {/* right section */}
      <section className='basis-3/12 space-y-8'>
        <SidePane />
      </section>
      {/* --- end of the right section */}
    </div>
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
  const movieData = await getMovieData(id as string);

  const movieIds = getAllMovieIds();
  const allMoviesData = await Promise.all(
    movieIds.map(async (id) => await getMovieData(id))
  );

  return {
    props: {
      movieData,
      allMoviesData,
    },
  };
};
