/* eslint-disable @typescript-eslint/no-var-requires */
const withMdxEnhanced = require('next-mdx-enhanced');
const withImages = require('next-images');

// const headings = require('remark-autolink-headings');
const slug = require('remark-slug');

const enhanceMdx = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [slug],
  rehypePlugins: [],
});

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const config = {
  assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },

  webpack: (config, { isServer }) => {
    require('ts-node').register({
      module: 'commonjs',
    });
    require('./util/generateSitemap.ts');

    return config;
  },
};

module.exports = compose(enhanceMdx, withImages)(config);
