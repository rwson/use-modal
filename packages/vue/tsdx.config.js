module.exports = {
  rollup(config, options) {
    if (options.dev) {
      config.output.file = config.output.file.replace('dist', 'example/hooks');
    }

    return config;
  },
};