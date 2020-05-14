// var poolBingo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
//
// var callingCounts= 0;
// var numbersCalledPool = [];
//
//
// var index= null;
//
//
// function setup() {
//   createCanvas(600,600);
// }
// 
// function draw() {
//   background(0);
//
//   fill(255);
//   textSize(14);
//   text("Calling_Counts   =",10, 40)
//   text(callingCounts, 140, 40);
//
//
//   fill(255);
//   textSize(24);
//   text("Game started. Press Mouse!", 120, 100)
//
//   fill(255);
//   textSize(14);
//   text("Numbers_Called_Pool   =",10, 60)
//   text(numbersCalledPool, 120, 60);
//
//
//   fill(255);
//   textSize(32);
//   text(callingCounts, 10);
//   text(poolBingo[index], 12, 200);
//
// }
//
// function mousePressed() {
//   var randNumMin = 0;
//   var randNumMax = poolBingo.length;
//   index =  (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin)
//   if (index > 0) {
//     return index;
//   }else{
//     value=0;
//   }
//   if (index > 0) {
//     callingCounts = callingCounts+1;
//   }else{
//     value=0;
//   }
//
//
//   }
