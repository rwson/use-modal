module.exports = {
  rollup(config, options) {
    if (options.dev) {
      config.output.file = config.output.file.replace('dist', 'example/@modalhooks/react');
    }

    return config;
  },
};