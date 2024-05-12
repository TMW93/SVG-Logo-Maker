class Logo {
  constructor(text, colour, shape) {
    this.text = text;
    this.colour = colour;
    this.shape = shape;
  }

  render() {
    if(this.shape === `Triangle`) {
      return `<text x="50%" y="72%" font-family="monospace, Times, serif" font-size="50" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    } else {
      return `<text x="50%" y="60%" font-family="monospace, Times, serif" font-size="50" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
    }
  }
}

module.exports = {Logo};