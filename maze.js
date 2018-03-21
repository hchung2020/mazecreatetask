var WINDOW_WIDTH = screen.width;
var WINDOW_HEIGHT = screen.height;
var BACKGROUND_COLOR = color(255);

void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
  //noLoop();
  for (var i = 0; i < character.length; i++) {
    character[i] = loadImage("tnt" + i + ".gif");
  }
}

class Character {
  var xPos;
  var characterNumber;

  Character() {
    xPos = 200;
    characterNumber = 0;
  }
  void moveCharacter() {
    drawCharacter();
    updateCharacter();
  }

  void drawCharacter() {
    image(character[characterNumber], xPos, 475, 100, 100);
  }

  void updateCharacterLeft() {
    characterNumber++;
    if (xPos > WINDOW_WIDTH + 50) {
      xPos = -50;
    }
    if (xPos < -50) {
      xPos = WINDOW_WIDTH + 50;
    }

    if (characterNumber == character.length) {
      characterNumber = 0;
    }
    xPos -= 3
  }
  void updateCharacterRight() {
    characterNumber++;
    if (xPos > WINDOW_WIDTH + 50) {
      xPos = -50;
    }
    if (xPos < -50) {
      xPosition = WINDOW_WIDTH + 50;
    }
    if (characterNumber == character.length) {
      characterNumber = 0;
    }
    xPos += 3
  }
}
