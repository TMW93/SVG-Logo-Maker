class Triangle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<polygon points="250,60 100,400 400,400" fill="${this.colour}"/>`;
  }

}

module.exports = {Triangle};