module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@resources': './src/resources',
          '@features': './src/features',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@constant': './src/constant',
        },
      },
    ],
  ],
};
