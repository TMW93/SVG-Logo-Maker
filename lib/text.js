class Logo {
  constructor(text, colour) {
    this.text = text;
    this.colour = colour;
  }

  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
  }
}

module.exports = {Logo};