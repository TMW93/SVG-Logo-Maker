const Square = require(`../lib/square`);

describe(`Square shape test`, () => {
  describe(`Checking render fucntion`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `red`;
      const shape = new Square(colour);
      expect(shape.render()).toEqual(`<polygon points="250,60 100,400 400,400" fill="red"/>`);
    })
  })
})