function raptorShip() {

  this.x = width / 2;

  this.show = function() {
    fill(255)
    image(Raptor, this.x, height - 90, 70, 90);
  }

  this.move = function(dir) {
    this.x += dir * 10
  }
}
