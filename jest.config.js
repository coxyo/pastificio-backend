export default {
  testEnvironment: 'node',
  transform: {},
  testTimeout: 60000,
  setupFilesAfterEnv: [
    './tests/config/setup.js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/config/*.js'
  ],
  verbose: true,
  testMatch: [
    '**/tests/**/*.test.js'
  ]
}