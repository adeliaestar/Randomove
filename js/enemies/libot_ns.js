function NS_Move(normal) {
  switch (normal.status) {
    case "up":
      normal.pos_y--;
      break;
    case "right":
      normal.pos_x++;
      break;
    case "left":
      normal.pos_x--;
      break;
    case "down":
      normal.pos_y++;
      break;
    case "secret":
      var random = Math.floor(Math.random() * 4);
      switch (random) {
        case 0:
          normal.pos_y--;
          break;
        case 1:
          normal.pos_x++;
          break;
        case 2:
          normal.pos_x--;
          break;
        case 3:
          normal.pos_y++;
          break;
      }
      break;
    default:
      break;
  }
  var random = Math.floor(Math.random() * 6);
  switch (random) {
    case 0:
      normal.status = "up"
      break;
    case 1:
      normal.status = "right"
      break;
    case 2:
      normal.status = "left"
      break;
    case 3:
      normal.status = "down"
      break;
    case 4:
      normal.status = "secret"
      break;
    case 5:
      normal.status = "secret"
      break;
  }
}
function NS_ImageCut(status, pos) {//normal
  if (pos === "x") {
    switch (status) {
      case "up":
        return 0;
        break;
      case "right":
        return 32;
        break;
      case "left":
        return 0;
        break;
      case "down":
        return 32;
        break;
      case "secret":
        return 64;
        break;
      default:
        break;
    }
  }
  if (pos === "y") {
    switch (status) {
      case "up":
        return 0;
        break;
      case "right":
        return 0;
        break;
      case "left":
        return 32;
        break;
      case "down":
        return 32;
        break;
      case "secret":
        return 0;
        break;
      default:
        break;
    }
  }
}