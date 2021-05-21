
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components'], {resolveSymlinks: false});

  module.exports = withTM({
    webpack: (config, options) => {

      if (options.isServer) {
        config.externals = ['react', ...config.externals];
      }

      // config.optimization.minimize = false
      
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