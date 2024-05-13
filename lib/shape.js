class Shape {
  constructor(colour) {
    this.colour = colour;
  }

  render() {
    throw new Error(`Child class must implement render() method.`);
  }
}

module.exports = Shape;