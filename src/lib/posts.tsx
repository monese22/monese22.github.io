import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// directory for markdown files
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/posts');
const MOVIE_POST_FILE_NAMES = fs.readdirSync(POSTS_DIRECTORY);

// get all movies data in js array
export function getMoviesData(): { id: string }[] {
  const allMoviesData = MOVIE_POST_FILE_NAMES.map((fileName) => {
    // read file name and remove extension to get id
    const id = fileName.replace(/\.md$/, '');

    // read markdown file as string
    const fullpath = path.join(POSTS_DIRECTORY, fileName);
    const fileContent = fs.readFileSync(fullpath, 'utf-8');

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allMoviesData;
}

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
