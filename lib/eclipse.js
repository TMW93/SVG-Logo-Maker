class Eclipse {
  constructor(choice) {
    this.colour = choice;
  }

  render() {
    return `<ellipse cx="50%" cy="52%" rx="150" ry="80" fill="${this.colour}"/>`;
  }

} 

module.exports = {Eclipse}; 