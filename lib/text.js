class Logo {
  constructor(text, colour) {
    this.text = text;
    this.colour = colour;
  }

  render() {
    return `<text x="50%" y="60%" font-size="50" text-anchor="middle" fill="${this.colour}">${this.text}</text>`;
  }
}

module.exports = {Logo};