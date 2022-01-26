import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// TODO
// There will be a lot of duplication when implememt this for series
// this file need to be refactor to reduce duplicate logics in functional way

export type MovieData = {
  id: string;
  title: string;
  imdbRating: number;
  releaseYear: number;
  duration: string;
  genres: string[];
  poster: {
    large: string;
    small: string;
  };
  contentHtml: string;
};

const POSTS_PATH = path.join(process.cwd(), 'src/posts');

export async function getMovieData(id: string): Promise<MovieData> {
  const fullPath = path.join(POSTS_PATH, `/movies/${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    ...data,
    contentHtml,
  } as MovieData;
}

export function getAllMovieIds() {
  const fileNames = fs.readdirSync(`${POSTS_PATH}/movies`);
  return fileNames.map((fileName) => fileName.replace(/.md$/, ''));
}
