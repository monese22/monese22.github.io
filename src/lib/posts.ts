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

// take Category and return the directory where the files are stored
export const contentPath = (category: Category) =>
  path.join(process.cwd(), `contents/${category}`);

// return full path, eg. `/home/user/../[filename].extension`
const fullPath = (fileName: string) => (filePath: string) =>
  path.join(filePath, fileName);

// take a full file name and return .part of the file
const getSlug = (fileName: string) => fileName.replace(/.md$/, '');

// take file part and return file content with utf8 encoding
const getFileContent = (filePath: string) => fs.readFileSync(filePath, 'utf8');

// take directory as input and return array of file names
export const getAllFileNames = (dir: string) => fs.readdirSync(dir);

// take arrray of file name and return the array of slugs
export const getAllSlugs = (fileNames: string[]) => fileNames.map(getSlug);

// beware: this function return promise
export const getData = (cat: string) => async (fileName: string) => {
  const slug = getSlug(fileName);
  const { data, content } = compose(
    contentPath,
    fullPath(fileName),
    getFileContent,
    matter
  )(cat);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...data,
    contentHtml,
  } as MovieData;
};

// beware! this function return promise
export const getAllData = (cat: Category) => (fileNames: string[]) => {
  return fileNames.map((fileName) => getData(cat)(fileName));
};

// return all data stored in the file of the directory sorted by the date
export const sortedAllData = (allData: MovieData[]) => {
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
