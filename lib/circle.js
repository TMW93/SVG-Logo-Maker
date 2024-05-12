class Circle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.colour}"/>`;
  }

}

module.exports = {Circle};