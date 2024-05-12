class Rectangle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<rect x="10%" y="4%" width="250" height="180" fill="${this.colour}"/>`;
  }

} 

module.exports = {Rectangle};