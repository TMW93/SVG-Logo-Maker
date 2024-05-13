const Shape = require("./shape");

class Rectangle extends Shape {

  render() {
    return `<rect x="10%" y="4%" width="250" height="180" fill="${this.colour}"/>`;
  }

} 

module.exports = {Rectangle};