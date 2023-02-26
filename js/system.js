document.addEventListener('keypress', moveplayer);
var playerpos = [0, 0];
var enemies = [];
var enemy_count = 0;
var objects = [];
var object_count = 0;
var turn = "player";
var defeat = false;
var clear = false;
var level = 0;//0 = menu
function AddEnemy(x,y,e_type,status){
    enemies.push({
        pos_x:x,
        pos_y:y,
        type:e_type,
        status:status
    });
    enemy_count ++;
}
function AddObject(x,y,o_type,status){
    objects.push({
        pos_x:x,
        pos_y:y,
        type:o_type,
        status:status
    });
    object_count ++;
}
function EnemyTurn(){
    for (let i = 0; i < enemy_count; i++) {
        if(enemies[i].pos_x === playerpos[0] && enemies[i].pos_y === playerpos[1]){
            Defeat();
        }
        switch (enemies[i].type) {
            case "normal":
              NL_Move(enemies[i]);
              break;
              case "secret":
              NS_Move(enemies[i]);
              break;
            default:
              break;
          }
          if(enemies[i].pos_x === playerpos[0] && enemies[i].pos_y === playerpos[1]){
            Defeat();
        }
      }
      turn = "player";
}
function ObjectCheck(){
    for (let i = 0; i < object_count; i++) {
        if(objects[i].pos_x === playerpos[0] && objects[i].pos_y === playerpos[1] && objects[i].type === "hole"){
            Defeat();
        }
        if(objects[i].pos_x === playerpos[0] && objects[i].pos_y === playerpos[1] && objects[i].type === "goal"){
            Clear();
        }
      }
}
function Defeat(){
    defeat = true;
}
function Clear(){
    clear = true;
}
LoadLevel(level);

