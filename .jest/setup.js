window.matchMedia = window.matchMedia ||
  function watchMedia () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }
  }