const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        // do mutation to the config
        // Make whatever fine-grained changes you need
        config.module.rules.push(
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: path.resolve(__dirname, '../'),
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                include: path.resolve(__dirname, '../'),
            }
        );

        return config;
    },
};
