import path from 'path';
import sane from 'sane';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { reloadRoutes } from 'react-static/node';

import loadHast from './scripts/loadHast';

sane('contents').on('all', () => reloadRoutes());

export default {
  entry: 'src/index.tsx',
  getSiteData: () => ({
    siteTitle: "3846masa's Portfolio",
    siteDescription: '@3846masa (@EBAGmasa) の制作物をまとめたサイト',
  }),
  getRoutes: async () => {
    const { products, programs, others } = await loadHast('contents');
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          products: products.map(i => ({ ...i.frontmatter, path: i.path })),
          programs: programs.map(i => ({ ...i.frontmatter, path: i.path })),
          others: others.map(i => ({ ...i.frontmatter, path: i.path })),
        }),
      },
      ...[...products, ...programs, ...others].map(data => ({
        path: data.path,
        component: 'src/containers/Markdown',
        getData: () => ({
          ...data,
        }),
      })),
    ];
  },
  renderToHtml(render, Comp, meta) {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class Document extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      return (
        <Html lang="ja-JP">
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Lato:400,900|Noto+Sans+JP:400,700|Source+Code+Pro:500,700&amp;subset=japanese,latin-ext"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  webpack: (config, { defaultLoaders }) => ({
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
        fdate: require.resolve('fdate'),
      },
    },
    module: {
      ...config.module,
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              use: [
                {
                  loader: 'babel-loader',
                },
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                  },
                },
              ],
            },
            defaultLoaders.cssLoader,
            defaultLoaders.fileLoader,
          ],
        },
      ],
    },
  }),
};
