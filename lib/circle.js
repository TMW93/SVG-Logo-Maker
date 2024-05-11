class Circle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.colour}"/>`;
  }

}

module.exports = {Circle};