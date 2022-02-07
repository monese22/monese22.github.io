import * as React from 'react';

import { getAllMovieIds, getMovieData } from '@/lib/posts';

import Cards from '@/components/layout/Cards';
import MainAds from '@/components/layout/MainAds';
import NewReleasePane from '@/components/layout/NewReleasePane';

import { MovieData } from '@/types';

export default function Home({
  allMoviesData,
}: {
  allMoviesData: MovieData[];
}) {
  return (
    <div className='max-w-[1140px] flex flex-col gap-16 mx-auto mt-10'>
      <NewReleasePane />
      <MainAds />
      <Cards allMoviesData={allMoviesData} />
    </div>
  );
}

export async function getStaticProps() {
  const movieIds = getAllMovieIds();
  const allMoviesData = await Promise.all(
    movieIds.map(async (id) => await getMovieData(id))
  );

  return {
    props: {
      allMoviesData: allMoviesData,
    },
  };
}
