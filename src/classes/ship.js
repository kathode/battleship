export class Ship {
  constructor(size, coordinates, orientation) {
    this.size = size;
    this.coordinates = coordinates;
    this.orientation = orientation;
    this.isSunk = false;
    this.hitCount = 0;
  }

  hit(xPosition, yPosition) {
    // hits origin
    if (xPosition === this.coordinates.x && yPosition === this.coordinates.y) {
      this.hitCount++;
      this.isSinking();

      return true;
    }

    // hits horizontal position other than origin
    if (
      this.orientation === "horizontal" &&
      yPosition === this.coordinates.y &&
      xPosition > this.coordinates.x &&
      xPosition <= this.coordinates.x + this.size - 1
    ) {
      this.hitCount++;
      this.isSinking();

      return true;
    }

    // hits vertical position other than origin
    if (
      this.orientation === "vertical" &&
      xPosition === this.coordinates.x &&
      yPosition > this.coordinates.y &&
      yPosition <= this.coordinates.y + this.size - 1
    ) {
      this.hitCount++;
      this.isSinking();

      return true;
    }

    return false;
  }

  isSinking() {
    if (this.size === this.hitCount) {
      this.isSunk = true;

      return true;
    }

    return false;
  }
}
