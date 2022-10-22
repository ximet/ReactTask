module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    'chart.js': '<rootDir>/node_modules/chart.js/dist/chart.mjs',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
  }
};

//   transform: {
//     '^.+\\.ts?$': 'ts-jest'
//   },
// setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

// testEnvironment: 'node',
// transformIgnorePatterns: ['<rootDir>/node_modules/'],
// globals: {
//   'ts-jest': {
//       tsconfig: '<rootDir>/tsconfig.json',
//   },
// },

//   "modulePaths": [
//     "<rootDir>/src/"
//   ],
//   "setupFilesAfterEnv": [
//     "<rootDir>/src/setupTests.ts"
//   ],
//   "moduleNameMapper": {
//     "chart.js": "<rootDir>/node_modules/chart.js/dist/chart.mjs"
//   },
//   "preset": "ts-jest",
//   "testEnvironment": "node",
//   "transform": {
//     "^.+\\.ts?$": "ts-jest"
//   },
//   "transformIgnorePatterns": [
//     "<rootDir>/node_modules/"
//   ]
