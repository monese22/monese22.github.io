import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

import { Category, MovieData } from '@/types';

export const compose =
  (...fns: any[]) =>
  (arg: any) =>
    fns.reduce((i, f) => f(i), arg);

export const contentPath = (category: Category) =>
  path.join(process.cwd(), `contents/${category}`);

const fullPath = (fileName: string) => (filePath: string) =>
  path.join(filePath, fileName);

const getSlug = (fileName: string) => fileName.replace(/.md$/, '');

const getFileContent = (filePath: string) => fs.readFileSync(filePath, 'utf8');

export const getAllFileNames = (dir: string) => fs.readdirSync(dir);

export const getAllSlugs = (fileNames: string[]) => fileNames.map(getSlug);

export const getSortedAllData = (dir: string) => {
  const fileNames = getAllFileNames(dir);
  const allData = fileNames.map((fileName) => {
    const id = getSlug(fileName);
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

export const getData = (cat: Category) => async (id: string) => {
  const fileName = `${id}.md`;
  const { data, content } = compose(
    contentPath,
    fullPath(fileName),
    getFileContent,
    matter
  )(cat);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    ...data,
    contentHtml,
  } as MovieData;
};
