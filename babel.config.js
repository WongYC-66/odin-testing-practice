//  https://jestjs.io/docs/getting-started#using-babel
// because ES6 not supported, so use babel

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};