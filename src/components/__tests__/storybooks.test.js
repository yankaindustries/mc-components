import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'

jest.mock('../ModalPortal')

initStoryshots({
  test: multiSnapshotWithOptions({}),
})
