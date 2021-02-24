
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components']);

  module.exports = withTM({
    webpack: (config) => {
      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
  
      return config
    },

    i18n: {
      locales: ['en','de'],
      defaultLocale: 'en',    
    },

    async redirects() {
      return [
        {
          source: '/vote/105507',
          destination: '/vote/119699',
          permanent: false,
        },
      ]
    },
  
  });