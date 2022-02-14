import { GetStaticProps } from 'next';

import { ITEMS_PER_PAGE } from '@/lib/configuration';
import {
  compose,
  contentPath,
  getAllData,
  getAllFileNames,
  sortedAllData,
} from '@/lib/posts';

import Cards from '@/components/layout/Cards';
import MainAds from '@/components/layout/MainAds';

import { MovieData } from '@/types';

type PageIdProps = {
  data: MovieData[];
};

export default function PageId({ data }: PageIdProps) {
  return (
    <div className='space-y-12'>
      <Cards allMoviesData={data} category='movies' />
      <MainAds />
    </div>
  );
}

export async function getStaticPaths() {
  const allMovieIds: MovieData[] = compose(
    contentPath,
    getAllFileNames
  )('movies');
  const movies = allMovieIds.length;

  const id = Math.ceil(movies / ITEMS_PER_PAGE);
  const paths = [...Array(id)].map((_, i) => ({
    params: {
      id: String(i + 1),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id as string);
  const moviesData: MovieData[] = await Promise.all(
    compose(
      contentPath,
      getAllFileNames,
      getAllData('movies'),
      sortedAllData
    )('movies')
  );

  const start = (id - 1) * ITEMS_PER_PAGE;
  const data = moviesData.slice(start, start + ITEMS_PER_PAGE);

  return {
    props: {
      data,
    },
  };
};
