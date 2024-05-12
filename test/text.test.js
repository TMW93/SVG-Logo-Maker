const {Logo} = require(`../lib/text`);

describe(`Text test`, () => {
  describe(`Checking render fucntion`, () => {
    it(`render method should return a string for the corresponding SVG file with the given shape color.`, () => {
      const colour = `red`;
      const text = `My Logo`
      const logo = new Logo(text, colour);
      expect(logo.render()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">My Logo</text>`);
    })
  })
})