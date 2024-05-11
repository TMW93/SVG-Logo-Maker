class Square {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<rect x="10" y="10" width="30" height="30"/>`;
  }

}
module.exports = {Square};