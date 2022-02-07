type DownloadsType = {
  server: string;
  quality: string;
  size: string;
  link: string;
};

export type Category = 'movies' | 'series' | 'shorts';

export type MovieData = {
  id: string;
  title: string;
  imdbRating: number;
  releaseYear: number;
  date: string;
  duration: string;
  genres: string[];
  poster: {
    large: string;
    small: string;
  };
  downloads: DownloadsType[];
  contentHtml: string;
};
