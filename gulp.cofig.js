module.exports = function() {
  var config = {
    temp: './.tmp',

    /**
      * Files Paths
    */
    alljs: [
      './src/**/*.js',
      './*.js'
    ],

    less: './src/client/styles/styles.less'
  };

  return config;
};
