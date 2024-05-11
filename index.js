const inquirer = require(`inquirer`);
// const document = require(`./lib/document`);
const {Shapes} = require(`./lib/shapes`);
const {Logo} = require(`./lib/text`);
// const fs = require(`fs`);

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
      choices: [`Circle`, `Eclispe`,`Square`, `Rectangle`, `Star`],
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

    const logo = Shapes(response.logoShape, response.logoShapeColour);
    console.log(logo);

    const text = Logo(response.logoText, response.logoTextColour);
    console.log(text);
  });