module.exports = {
  preset: 'jest-puppeteer',
  rootDir: '../',
  testMatch: ['<rootDir>/**/*.visual.js'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
}
