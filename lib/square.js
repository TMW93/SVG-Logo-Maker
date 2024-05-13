const Shape = require("./shape");

class Square extends Shape {

  render() {
    return `<rect x="20%" y="8" width="180" height="180" fill="${this.colour}"/>`;
  }

} 

module.exports = {Square};