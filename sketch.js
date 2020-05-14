  var arrayOfBubbles = [];
  var index = 0;
  var flowers = [];
  i=0;
  function preload() {

      if (i<4) {
      for (i=0; i<4; i++) {
        flowers[i]= loadImage("images/flower"  +i+    ".jpg")
        }
      } else{ i = i-1;}
  }

  function setup() {
    createCanvas(600,400);
  }

  function mousePressed(){
  //arrayOfBubbles.push(new Bubble_OOT_Constructor);
    var b = new Bubble_OOT_Constructor(mouseX, mouseY, flowers[i]);
    arrayOfBubbles.push(b);
    
    if (i>3) {
    i = 0;
  };
};

  function draw() {
      background(240);
      for (i=0; i<arrayOfBubbles.length; i++) {
        arrayOfBubbles[i].move();
        arrayOfBubbles[i].display();
      };
    };
