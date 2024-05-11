const inquirer = require(`inquirer`);
// const document = require(`./lib/document`);
const {Logo} = require(`./lib/text`);
// const fs = require(`fs`);

const {Circle} = require(`./lib/circle`);
const {Triangle} = require(`./lib/triangle`);
const {Square} = require(`./lib/square`);

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
      choices: [`Circle`, `Eclispe`,`Square`, `Rectangle`, `Triangle`,`Star`],
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

    if(response.logoShape === `Circle`) {
      let shape = new Circle(response.logoShapeColour);
      console.log(shape.render());
      console.log(shape.colour);

    } else if(response.logoShape === `Square`) {
      let shape = new Square(response.logoShapeColour);
      console.log(shape.render());
      console.log(shape.colour);
      
    } else if(response.logoShape === `Triangle`) {
      let shape = new Triangle(response.logoShapeColour);
      console.log(shape.render());
      console.log(shape.colour);
    }



  });