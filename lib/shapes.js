function Shapes(shape, colour) {
  let returnedShape = ``;

  if(shape === `Circle`) {
    returnedShape = `<circle cx="25" cy="75" r="20 fill=${colour}"/>`
  } else if(shape === `Eclipse`) {
    returnedShape = `<ellipse cx="75" cy="75" rx="20" ry="5" fill=${colour}/>`;
  } else if(shape === `Rectangle`) {
    returnedShape = `<rect x="10" y="10" width="50" height="30" fill=${colour}/>`;
  } else if(shape === `Square`) {
    returnedShape = `<rect x="10" y="10" width="30" height="30" fill=${colour}/>`;
  } else if(shape === `Star`) {
    returnedShape = `<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill=${colour}/>`;
  }

  return returnedShape;
}

module.exports = {Shapes};