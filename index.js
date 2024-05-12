const inquirer = require(`inquirer`);
const {writeFile} = require(`fs/promises`);
const {join} = require('path');

const {generateLogo} = require(`./lib/document`);
const {Circle} = require(`./lib/circle`);
const {Triangle} = require(`./lib/triangle`);
const {Square} = require(`./lib/square`);
const {Eclipse} = require(`./lib/eclipse`);
const {Rectangle} = require(`./lib/rectangle`);
const {Logo} = require(`./lib/text`);

inquirer
  .prompt ([
    {
      type: `input`,
      message: `Enter the logo's text`,
      name: `logoText`,
    },

    {
      type: `input`,
      message: `Enter the text colour`,
      name: `logoTextColour`,
    },

    {
      type: `list`,
      message: `Choose which shape the logo will be:`,
      choices: [`Circle`, `Eclipse`,`Square`, `Rectangle`, `Triangle`,`Star`],
      name: `logoShape`,
    },

    {
      type: `input`,
      message: `Enter the logo's colour`,
      name: `logoShapeColour`,
    },
  ])
  .then((response) => {
    // console.log(`This is what you chose:`);
    // console.log(response.logoText);
    // console.log(response.logoTextColour);
    // console.log(typeof(response.logoShape));
    // console.log(response.logoShapeColour);

    let shape = ``;
    let logo = new Logo(response.logoText, response.logoTextColour);

    if(response.logoShape === `Circle`) {
      shape = new Circle(response.logoShapeColour);

    } else if(response.logoShape === `Square`) {
      shape = new Square(response.logoShapeColour);
      
    } else if(response.logoShape === `Triangle`) {
      shape = new Triangle(response.logoShapeColour);

    } else if(response.logoShape === `Eclipse`) {
      shape = new Eclipse(response.logoShapeColour);

    } else if(response.logoShape === `Rectangle`) {
      shape = new Rectangle(response.logoShapeColour);
    }

    return writeFile(
      join(__dirname, `.`, `examples`, `logo.svg`),
      generateLogo(shape.render(), logo.render())
    );

  });