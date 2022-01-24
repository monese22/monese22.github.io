import * as React from 'react';

import { getAllMovieIds, getMovieData, MovieData } from '@/lib/posts';

import MainAds from '@/components/layout/MainAds';
import Movies from '@/components/layout/Movies';
import NewReleasePane from '@/components/layout/NewReleasePane';

export default function Home({
  allMoviesData,
}: {
  allMoviesData: MovieData[];
}) {
  return (
    <div className='max-w-[1140px] flex flex-col gap-16 mx-auto mt-10'>
      <NewReleasePane />
      <MainAds />
      <Movies allMoviesData={allMoviesData} />
    </div>
  );
}

export async function getStaticProps() {
  const movieIds = getAllMovieIds();
  const allMoviesData = movieIds.map((id) => getMovieData(id));

  return {
    props: {
      allMoviesData: allMoviesData,
    },
  };
}
