const {Triangle} = require(`../lib/triangle`);

describe(`Triangle shape test`, () => {
  describe(`Checking render function`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `blue`;
      const shape = new Triangle(colour);
      expect(shape.render()).toEqual(`<polygon points="150,0 50,150 250,150" fill="blue"/>`);
    })
  })
})