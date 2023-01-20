var Canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function playerupdate() {
  fabric.Image.fromURL("player.png", function (Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: player_y,
      left: player_x
    });
    Canvas.add(player_object);
  });

}

function new_Image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    block_object = Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
      top: player_y,
      left: player_x
    });
    Canvas.add(block_object);
  });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (e.shiftkey == true && keyPressed == '80') {
    console.log("p and shift pressed together");
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
  }

  if (e.shiftkey && keyPressed == '77') {
    console.log('m and shift pressed together');
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
  }
}

if (keyPressed == '40') {
  down();
  console.log("down");
}
if (keyPressed == '38') {
  up();
  console.log("up");
}
if (keyPressed == '37') {
  left();
  console.log("left");
}
if (keyPressed == '39') {
  right();
  console.log("right");
}

if (keyPressed == '87') {
  new_Image('wall.jpg');
  console.log("w");
}
if (keyPressed == '71') {
  new_Image('ground.png');
  console.log("g");
}
if (keyPressed == '76') {
  new_Image('light_green.png');
  console.log("l");
}
if (keyPressed == '84') {
  new_Image('trunk.jpg');
  console.log("t");
}
if (keyPressed == '82') {
  new_Image('roof.jpg');
  console.log("r");
}
if (keyPressed == '89') {
  new_Image('yellow_wall.png');
  console.log("y");
}
if (keyPressed == '68') {
  new_Image('dark_green.png');
  console.log("d");
}
if (keyPressed == '85') {
  new_Image('diffrent.png');
  console.log("u");
}
if (keyPressed == '67') {
  new_Image('cloud.jpg');
  console.log("c");
}

function up() {
  if (player_y >= 0) {
    player_y = player_y - block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("when Up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
    Canvas.remove(player_object);
    player_update();
  }
}
function down() {
  if (player_y <= 500) {
    player_y = player_y + block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("when Down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
    Canvas.remove(player_object);
    player_update();
  }
}
function right() {
  if (player_x <= 850) {
    player_x = player_x + block_image_width;
    console.log("block image weight = " + block_image_weight);
    console.log("when Right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
    Canvas.remove(player_object);
    player_update();
  }
}
function left() {
  if (player_x > 0) {
    player_x = player_x - block_image_width;
    console.log("block image weight = " + block_image_weight);
    console.log("when Left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
    Canvas.remove(player_object);
    player_update();
  }
}
