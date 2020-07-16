const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.tsx"],
  addons: ['@storybook/preset-scss', '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx", "js");

    return config;
  },
};