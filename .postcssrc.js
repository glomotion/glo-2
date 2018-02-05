// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-normalize": {},
    // "postcss-import": {},
    "postcss-import-url": {
      "modernBrowser": true,
    },
    "postcss-url": {},
    "postcss-cssnext": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {}
  }
}
