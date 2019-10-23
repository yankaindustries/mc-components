require('regenerator-runtime/runtime')

const { configureToMatchImageSnapshot } = require('jest-image-snapshot')

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  noColors: true,
});

expect.extend({ toMatchImageSnapshot })
