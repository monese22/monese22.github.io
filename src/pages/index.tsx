import * as React from 'react';

import {
  compose,
  contentPath,
  getAllData,
  getAllFileNames,
  sortedAllData,
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
  const allMoviesData = await Promise.all(
    compose(
      contentPath,
      getAllFileNames,
      getAllData('movies'),
      sortedAllData
    )('movies')
  );

  return {
    props: {
      allMoviesData: allMoviesData,
    },
  };
}
