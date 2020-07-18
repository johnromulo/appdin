module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@store': './src/store',
          '@pages': './src/pages',
          '@components': './src/components',
          '@services': './src/services',
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@interfaces': './src/interfaces',
          '@config': './src/config',
          '@hooks': './src/hooks',
          '@locales': './src/locales',
        },
      },
    ],
  ],
};
