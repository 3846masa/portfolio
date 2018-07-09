import fs from 'fs-extra';
import path from 'path';
import globby from 'globby';
import YAML from 'js-yaml';

import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkInlineLinks from 'remark-inline-links';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import removePosition from 'unist-util-remove-position';

const parser = unified()
  .use(remarkParse)
  .use(remarkFrontmatter, ['yaml'])
  .use(remarkInlineLinks)
  .use(remarkRehype, { allowDangerousHTML: true })
  .use(rehypeRaw)
  .freeze();

/**
 * @param {string} raw
 */
async function markdownToHast(raw) {
  const mdast = parser.parse(raw);
  let frontmatter = {};
  if (mdast.children[0].type === 'yaml') {
    const { value: configStr } = mdast.children.shift();
    frontmatter = YAML.safeLoad(configStr);
  }
  return {
    frontmatter,
    hast: removePosition(await parser.run(mdast), true),
  };
}

/**
 * @param {string} contentPath
 */
async function loadHast(contentPath) {
  const files = await globby(contentPath, {
    // @ts-ignore
    expandDirectories: {
      extensions: ['md'],
    },
  });

  const parsed = (await Promise.all(
    files.map(async f => ({
      markdown: {
        ...(await markdownToHast(await fs.readFile(f, 'utf8'))),
      },
      filePath: path.relative(contentPath, f),
    })),
  )).sort((a, b) => {
    const aDate = new Date(a.markdown.frontmatter.published);
    const bDate = new Date(b.markdown.frontmatter.published);
    return aDate < bDate ? 1 : -1;
  });

  const store = {};
  for (const data of parsed) {
    const dirPath = path.dirname(data.filePath);
    const fileName = path.basename(data.filePath, '.md');
    const info = {
      ...data.markdown,
      path: dirPath ? `/${dirPath}/${fileName}` : `/${fileName}`,
    };
    if (!dirPath) {
      store[fileName] = info;
      continue;
    }
    store[dirPath] = store[dirPath] || [];
    store[dirPath].push(info);
  }

  return store;
}

export default loadHast;
