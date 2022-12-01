const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://your-production.url';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'assets',
  input: 'src',
  output: 'dist'
};

const dir = {
  img: `/${folder.assets}/images/`,
  favicons: `/${folder.assets}/images/favicon/`,
  css: `/${folder.assets}/styles/`,
  icons: `/${folder.assets}/images/icons/`,
}

module.exports = {
  siteName: 'ProBusinessTech',
  themeColor: '#000000',
  author: 'David Walker',
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
    favicons: `${baseUrl}${dir.favicons}`,
    css: `${baseUrl}${dir.css}`,
    icons: `${baseUrl}${dir.icons}`,
  },
  flags: {
    prism:0,
  },
  tracking: {
    gtag: 'UA-91383659-1'
  }
};
