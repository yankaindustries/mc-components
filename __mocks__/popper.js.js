import PopperJs from 'popper.js';

export default class Popper {
  constructor() {
    this.placements = PopperJs.placements;

    return {
      destroy: () => {},
      scheduleUpdate: () => {}
    };
  }
}
