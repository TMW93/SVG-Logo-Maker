const {Circle} = require(`../lib/circle`);

describe(`Circle shape test`, () => {
  describe(`Checking render fucntion`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `green`;
      const shape = new Circle(colour);
      expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="green"/>`);
    })
  })
})