class Eclipse {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<ellipse cx="50%" cy="60%" rx="250" ry="100" fill="${this.colour}"/>`;
  }

} 

module.exports = {Eclipse}; 