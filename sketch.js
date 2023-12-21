let sonidos = [];

function preload() {
  for (let i = 0; i < 17; i++) {
    sonidos[i] = loadSound("sonidos/" + i + ".mp3");
  }
}

function setup() {}

function draw() {}

function keyPressed() {
  reproducirSonido(key);
}

function reproducirSonido(tecla) {
  switch (tecla) {
    case "q":
      sonidos[0].play();
      break;
    case "w":
      sonidos[1].play();
      break;
    case "e":
      sonidos[2].play();
      break;
    case "r":
      sonidos[3].play();
      break;
    case "t":
      sonidos[4].play();
      break;
    case "y":
      sonidos[5].play();
      break;
    case "u":
      sonidos[6].play();
      break;
    case "i":
      ////////////////////////////////
      sonidos[7].play();
      break;
    case "a":
      sonidos[8].play();
      break;
    case "s":
      sonidos[9].play();
      break;
    case "d":
      sonidos[10].play();
      break;
    case "f":
      sonidos[11].play();
      break;
    case "g":
      sonidos[12].play();
      break;
    case "h":
      sonidos[13].play();
      break;
    case "j":
      sonidos[14].play();
      break;
    case "k":
      sonidos[15].play();
      break;
    case "l":
      sonidos[16].play();
      break;
  }
}
