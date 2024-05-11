// const shape = require(`./shapes`);

function generateLogo(shape, text) {
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="red" />

${shape}

${text}

</svg>`;
}

module.exports = (generateLogo);