module.exports = function (config) {
  config.set({
    // ...your existing config...
    customLaunchers: {
      BraveNoSandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    browsers: ['BraveNoSandbox'], // instead of 'Chrome'
  });
};