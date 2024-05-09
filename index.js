const inquirer = require(`inquirer`);

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
      choices: [`Circle`, `Square`, `Triangle`, `Star`, `Diamond`],
      name: `logoShape`,
    },

    {
      type: `input`,
      message: `Enter the logo's colour`,
      name: `logoShapeColour`,
    },
  ])
  .then((response) => {
    console.log(`This is what you chose:`);
    console.log(response.logoText);
    console.log(response.logoTextColour);
    console.log(response.logoShape);
    console.log(response.logoShapeColour);
  });