module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'transform-inline-environment-variables',
    ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],
  ],
};
