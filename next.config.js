
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components'], {resolveSymlinks: false});
const { withSentryConfig } = require('@sentry/nextjs');

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};


module.exports = withSentryConfig(withTM({
    experimental: {
    esmExternals: 'loose',
    },

    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    
    webpack: (config, options) => {
      if (options.isServer) {
        config.externals = ['react', ...config.externals];
      }

      // config.optimization.minimize = false

      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });

      
      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
      return config
    },

    async redirects(){
      return [
        {
          source: '/vote/105507',
          destination: '/vote/119699',
          permanent: false
        },
      ]
    },


    async redirects() {
      return [
         
        {
          source: '/cg',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_cg',
          permanent: false, 
        },

        {
          source: '/lz',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_lz',
          permanent: false, 
        },

        {
          source: '/ng',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_ng',
          permanent: false, 
        },

        {
          source: '/me',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_me',
          permanent: false, 
        },

        {
          source: '/dk',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_dk',
          permanent: false, 
        },

        {
          source: '/mb',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_mb',
          permanent: false, 
        },

        {
          source: '/ad',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_ad',
          permanent: false, 
        },

        {
          source: '/mk',
          destination: '/?utm_source=email&utm_medium=email&utm_campaign=magic_link_mk',
          permanent: false, 
        },
        
        {
          source: '/vote/categories',
          destination: '/vote',
          permanent: false,
        }]
    },

    i18n: {
      locales: ['en','de'],
      defaultLocale: 'en',
    },
  
}), SentryWebpackPluginOptions);

