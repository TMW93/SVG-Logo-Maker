const {Circle} = require(`../lib/circle`);

describe(`Circle shape test`, () => {
  describe(`Checking render function`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `green`;
      const shape = new Circle(colour);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="green"/>`);
    })
  })
})