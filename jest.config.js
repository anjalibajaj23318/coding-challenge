module.exports = {
  testEnvironment: 'jsdom',
  roots: ['frontend/src'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios|my-other-module)/)"
],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^axios$': 'frontend/node_modules/axios/dist/axios.min.js'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/'
  ]
}