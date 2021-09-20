var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "images/dice1.png";

imgArray[1] = new Image();
imgArray[1].src = "images/dice2.png";

imgArray[2] = new Image();
imgArray[2].src = "images/dice3.png";

imgArray[3] = new Image();
imgArray[3].src = "images/dice4.png";

imgArray[4] = new Image();
imgArray[4].src = "images/dice5.png";

imgArray[5] = new Image();
imgArray[5].src = "images/dice6.png";

function randomizeImage() {
  let random1 = Math.random();
  random1 = Math.floor(random1 * 6) + 1;

  let random2 = Math.random();
  random2 = Math.floor(random2 * 6) + 1;

  var img1 = document.querySelector(".dice .img1");
  img1.src = imgArray[random1 - 1].src;

  var img2 = document.querySelector(".dice .img2");
  img2.src = imgArray[random2 - 1].src;

  console.log(random1);
  console.log(random2);

  var text = document.body.querySelector(".container .result-text");
  if (random1 > random2) {
    text.textContent = "P1 win!";
  } else if (random2 === random1) {
    text.textContent = "Draw!";
  } else {
    text.textContent = "P2 win!";
  }

  return;
}

randomizeImage();
