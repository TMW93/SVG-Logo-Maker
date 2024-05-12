const {Square} = require(`../lib/square`);

describe(`Square shape test`, () => {
  describe(`Checking render fucntion`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `red`;
      const shape = new Square(colour);
      expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="red"/>`);
    })
  })
})