module.exports = {
  preset: 'jest-puppeteer',
  rootDir: '../',
  testMatch: ['<rootDir>/**/*.unit.js'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
}
