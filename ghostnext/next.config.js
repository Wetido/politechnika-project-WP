const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withPlugins([
        optimizedImages
    ],
{
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env),
        );
        
        // Config to have absolute imports instead of relative imports 
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')

        return config;
    },
});