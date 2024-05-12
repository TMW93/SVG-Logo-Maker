class Square {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<rect x="17%" y="" width="200" height="200" fill="${this.colour}"/>`;
  }

} 
module.exports = {Square};