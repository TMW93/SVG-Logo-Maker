class Triangle {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<polygon points="140,0 10,180 290,180" fill="${this.colour}"/>`;
  }

}

module.exports = {Triangle};