function Logo(text, colour) {

  const returnedLogo = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${colour}>${text}</text>`;

  return returnedLogo;
}

module.exports = {Logo};