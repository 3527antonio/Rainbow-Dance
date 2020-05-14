function Bubble_OOT_Constructor(_x, _y, _img) {
      this.x = _x;
      this.y = _y;
      this.img = _img;

      this.display = function () {
         //stroke(255);
         //fill(random(255),random(255),random(255));
         // ellipse(this.x, this.y, 48, 48);

         imageMode(CENTER);
         image(this.img, this.x, this.y);
      }

      this.move = function() {
          this.x = this.x + random(-3, 3);
          this.y = this.y + random(-3, 3);
  }
}
