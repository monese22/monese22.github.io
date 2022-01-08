import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// directory for markdown files
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/posts');
const MOVIE_POST_FILE_NAMES = fs.readdirSync(POSTS_DIRECTORY);

/* TODO

need to add type information to matterResult.data
The `getMoviesData` function return the array of object `MovieData` but cannot add
type information, because the type of matterResult is `[key: string]: any`
*/

type MovieData = {
  id: string;
  postRoute: string;
  //   title: string,
  //   imdbRating: number,
  //   release: number,
  //   poster: {
  //     small: string,
  //     large: string
  //   }
};

type GetMoviesData = () => MovieData[];

export const getMoviesData: GetMoviesData = () => {
  const allMoviesData = MOVIE_POST_FILE_NAMES.map((filename) => {
    const id = filename.replace(/.md$/, '');

    const fullPath = path.join(POSTS_DIRECTORY, filename);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    const matterResult: matter.GrayMatterFile<string> = matter(fileContent);

    return {
      id,
      postRoute: `/details/${id}`,
      ...matterResult.data,
    };
  });

  return allMoviesData;
};

export function getAllMoviesId() {
  return MOVIE_POST_FILE_NAMES.map((moviePostFile) => {
    return {
      params: { movieId: moviePostFile.replace(/.md$/, '') },
    };
  });
}

// get data of movie with specific id
export async function getMovieData(id: string) {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContent);
  const processContent = remark().use(html).process(matterResult.content);
  const contentHTML = processContent.toString();

  return {
    id,
    contentHTML,
    ...matterResult.data,
  };
}
