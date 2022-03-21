const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'test.js'],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/tests/mocks/styleMock.js",
  }
};
