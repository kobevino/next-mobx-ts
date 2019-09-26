const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');
const SpritesmithPlugin = require('webpack-spritesmith');


const withSpriteSmith = new SpritesmithPlugin({
  src: {
    cwd: path.resolve(__dirname, './assets/ico'),
    glob: '*.png'
  },
  target: {
    image: path.resolve(__dirname, './static/sprites/sprite.png'),
    css: path.resolve(__dirname, './styles/sprite.scss')
  },
  retina: '@2x',
  apiOptions: {
    cssImageRef: "~sprite.png"
  }
});

const plugins = [ 
  [ withSass ], 
  [ optimizedImages, { optimizeImages: false } ] 
];

const nextConfig = {
  webpack: (config, options) => {
    config.resolve.modules.push('static/sprites');
    config.plugins.push(withSpriteSmith);
    
    return config;
  }
};

module.exports = withPlugins([...plugins], nextConfig);