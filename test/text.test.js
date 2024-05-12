const {Logo} = require(`../lib/text`);

describe(`Text test`, () => {
  describe(`Checking render function for triangle shape`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `red`;
      const text = `My Logo`;
      const shape = `Triangle`;
      const logo = new Logo(text, colour, shape);
      expect(logo.render()).toEqual(`<text x="50%" y="72%" font-family="monospace, Times, serif" font-size="50" text-anchor="middle" fill="red">My Logo</text>`);
    })
  })
})