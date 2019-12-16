import '@testing-library/jest-dom/extend-expect'

window.matchMedia = window.matchMedia ||
  function watchMedia () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  }