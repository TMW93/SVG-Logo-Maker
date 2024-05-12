class Triangle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<polygon points="150,0 50,150 250,150" fill="${this.colour}"/>`;
  }

}

module.exports = {Triangle};