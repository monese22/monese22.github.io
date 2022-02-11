import * as React from 'react';

import {
  compose,
  contentPath,
  getAllFileNames,
  getAllSlugs,
  getData,
} from '@/lib/posts';

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
    <>
      <NewReleasePane />
      <MainAds />
      <Cards allMoviesData={allMoviesData} category='movies' />
    </>
  );
}

export async function getStaticProps() {
  const movieIds: string[] = compose(
    contentPath,
    getAllFileNames,
    getAllSlugs
  )('movies');
  const allMoviesData = await Promise.all(
    movieIds.map((id) => getData('movies')(id))
  );

  return {
    props: {
      allMoviesData: allMoviesData,
    },
  };
}
