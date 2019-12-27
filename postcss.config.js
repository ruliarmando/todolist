const purgecss = require('@fullhuman/postcss-purgecss');

const purge = purgecss({
  content: ['./src/**/*.html', './src/**/*.js'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purge]
      : []
  ],
};
