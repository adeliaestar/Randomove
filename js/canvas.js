function draw() {
  var img = new Image();
  var enm_img = new Image();
  var defeat_img = new Image();
  var hole_img = new Image();
  var goal_img = new Image();
  var clear_img = new Image();
  var press_start_img = new Image();
  var ctx = document.getElementById('canvas').getContext('2d');
  img.onload = function () {
    ctx.clearRect(0, 0, 320, 320);
    if (level >= 1) {
      ctx.drawImage(img, playerpos[0] * 32, playerpos[1] * 32,);
    }
    for (let i = 0; i < enemy_count; i++) {
      ctx.drawImage(enm_img, ImageCut_x(enemies[i]), ImageCut_y(enemies[i]), 32, 32, enemies[i].pos_x * 32, enemies[i].pos_y * 32, 32, 32);
    }
    for (let i = 0; i < object_count; i++) {
      switch (objects[i].type) {
        case "hole":
          ctx.drawImage(hole_img, objects[i].pos_x * 32, objects[i].pos_y * 32, 32, 32);
          break;
        case "goal":
          ctx.drawImage(goal_img, objects[i].pos_x * 32, objects[i].pos_y * 32, 32, 32);
          break;
        default:
          break;
      }
    }
    if (defeat === true) {
      ctx.drawImage(defeat_img, 32, 32,);
    }
    if (clear === true) {
      ctx.drawImage(clear_img, 32, 32,);
    }
    if (level == 0) {
      ctx.drawImage(press_start_img, 0, 0,);
    }
  };

  img.src = './img/player_libot.png';
  enm_img.src = './img/libot.png';
  defeat_img.src = './img/defeat.png';
  hole_img.src = './img/hole.png';
  goal_img.src = './img/goal.png';
  clear_img.src = './img/clear.png';
  press_start_img.src = './img/press_start.png';
}
draw();
function ImageCut_x(enemy) {
  switch (enemy.type) {
    case "normal":
      return NL_ImageCut(enemy.status, "x");
      break;
    case "secret":
      return NS_ImageCut(enemy.status, "x");
      break;
    default:
      break;
  }
}
function ImageCut_y(enemy) {
  switch (enemy.type) {
    case "normal":
      return NL_ImageCut(enemy.status, "y");
      break;
    case "secret":
      return NS_ImageCut(enemy.status, "y");
      break;
    default:
      break;
  }
}
