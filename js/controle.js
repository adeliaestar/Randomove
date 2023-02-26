function moveplayer(e) {
  if ((e.key === 'r' || e.key === 'R') && defeat == true) {
    playerpos = [-100,-100];
    defeat = false;
    LoadLevel(level);
    return false;
  }
  if (e.key === 'm' || e.key === 'M') {
    level = 0;
    LoadLevel(level);
    return false;
  }
  if ((e.key === 's' || e.key === 'S') && (level == 0 || clear == true)) {
    clear = false;
    level ++;
    LoadLevel(level);
    return false;
  }
  
  
  if (turn === "player" && level != 0 && defeat == false && clear == false) {
    if (e.code === 'Space') {
      turn = "enemy";
      ObjectCheck()
      setTimeout(EnemyTurn, 200);
    }
    if (e.key === 'd' || e.key === 'D') {
      playerpos[0]++;
      turn = "enemy";
      ObjectCheck()
      setTimeout(EnemyTurn, 200);
    }
    if (e.key === 'a' || e.key === 'A') {
      playerpos[0]--;
      turn = "enemy";
      ObjectCheck()
      setTimeout(EnemyTurn, 200);
    }
    if (e.key === 's' || e.key === 'S') {
      playerpos[1]++;
      turn = "enemy";
      ObjectCheck()
      setTimeout(EnemyTurn, 200);
    }
    if (e.key === 'w' || e.key === 'S') {
      playerpos[1]--;
      turn = "enemy";
      ObjectCheck()
      setTimeout(EnemyTurn, 200);
    }
  }
  
}