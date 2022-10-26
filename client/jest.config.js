module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.{ts,tsx}',
    '!**/*.scss.ts',
    '!**/models/**',
    '!**/node_modules*/**',
    '!**/services/http.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  preset: 'ts-jest',
  resetMocks: true,
  roots: ['<rootDir>/src'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(scss)$'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
