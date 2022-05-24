module.exports = {
  plugins: [
    {
      plugin: require('craco-styled-jsx'),
      options: {
        sass: true, // Required node-sass to enable this option
        cssFileSupport: true, // Allow to write css in a standalone file
        cssFileTest: /\.styled\.(s)css$/,
      },
    },
  ],
};
