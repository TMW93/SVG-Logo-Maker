const {Eclipse} = require(`../lib//eclipse`);

describe(`Eclipse shape test`, () => {
  describe(`Checking render function`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `white`;
      const shape = new Eclipse(colour);
      expect(shape.render()).toEqual(`<ellipse cx="50%" cy="52%" rx="150" ry="80" fill="white"/>`);
    })
  })
})