
const path = require('path');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components'], {
  resolveSymlinks: true,
  // unstable_webpack5: true
});

// module.exports = withTM({
 
// });

/**.
 * https://medium.com/frontend-digest/using-nextjs-in-a-monorepo-e011ff1826f5
 */

module.exports = withPlugins([withTM], {

  webpack: (config, options) => {

    // config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'eventjuicer-site-components','node_modules', 'react');
    // config.resolve.alias['react-dom'] = path.resolve(__dirname, '.', 'node_modules', 'eventjuicer-site-components', 'node_modules', 'react-dom');

    return config
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.nl',
    //     defaultLocale: 'nl-NL',
    //   },
    //   {
    //     domain: 'example.fr',
    //     defaultLocale: 'fr',
    //   },
    // ],
  },

    async rewrites() {
      return [
     //   {
          // source: '/:slug,c,:id',
          // destination: '/company/:id', 
       // },
      ]
    },
  });


