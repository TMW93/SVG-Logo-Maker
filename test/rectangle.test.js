const {Rectangle} = require(`../lib/rectangle`);

describe(`Rectangle shape test`, () => {
  describe(`Checking render function`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `white`;
      const shape = new Rectangle(colour);
      expect(shape.render()).toEqual(`<rect x="10%" y="4%" width="250" height="180" fill="white"/>`);
    })
  })
})