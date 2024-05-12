class Rectangle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<rect x="20%" y="8" width="250" height="180" fill="${this.colour}"/>`;
  }

} 
module.exports = {Rectangle};