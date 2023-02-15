const keysTransformer = require('ts-transformer-keys/transformer').default;

module.exports = {
  webpackFina: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader', // or 'awesome-typescript-loader'
      options: {
        // make sure not to set `transpileOnly: true` here, otherwise it will not work
        getCustomTransformers: program => ({
            before: [
                keysTransformer(program)
            ]
        })
      }
    });

    // Return the altered config
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}