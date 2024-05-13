const Shape = require("./shape");

class Eclipse extends Shape {

  render() {
    return `<ellipse cx="50%" cy="52%" rx="150" ry="80" fill="${this.colour}"/>`;
  }

} 

module.exports = {Eclipse}; 