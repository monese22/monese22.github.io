import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

import { Category, MovieData } from '@/types';

const POST_PATH = path.join(process.cwd(), 'contents');

export const compose =
  (...fns: any[]) =>
  (arg: any) =>
    fns.reduce((i, f) => f(i), arg);

const contentPath = (category: Category) =>
  path.join(process.cwd(), `contents/${category}`);

const getId = (fileName: string) => fileName.replace(/.md$/, '');

const getFileContent = (filePath: string) => fs.readFileSync(filePath, 'utf8');

export const getAllFileNames = (dir: string) => fs.readdirSync(dir);

export const getAllId = (fileNames: string[]) => fileNames.map(getId);

export const getSortedAllData = (dir: string) => {
  const fileNames = getAllFileNames(dir);
  const allData = fileNames.map((fileName) => {
    const id = getId(fileName);
    const fullPath = path.join(dir, fileName);
    const matterResult = compose(getFileContent, matter)(fullPath);
    return {
      id,
      ...matterResult.data,
    } as MovieData;
  });

  return allData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export async function getMovieData(id: string): Promise<MovieData> {
  const fullPath = path.join(POST_PATH, `/movies/${id}.md`);
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
  const fileNames = fs.readdirSync(contentPath('movies'));
  return fileNames.map((fileName) => fileName.replace(/.md$/, ''));
}
