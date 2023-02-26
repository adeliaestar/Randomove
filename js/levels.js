function LoadLevel(lv) {
    turn = "player"
    enemies.length = 0;
    objects.length = 0;
    enemy_count = 0;
    object_count = 0;
    switch (lv) {
        case 0:
            break;
        case 1:
            playerpos = [0, 0];
            AddEnemy(2, 5, "normal", "up");
            AddEnemy(2, 2, "secret", "down");
            AddObject(1, 2, "hole", "none");
            AddObject(1, 2, "hole", "none");
            AddObject(4, 2, "hole", "none");
            AddObject(5, 2, "hole", "none");
            AddObject(6, 2, "hole", "none");
            AddObject(7, 2, "hole", "none");
            AddObject(3, 2, "goal", "none");
            break;
        case 2:
            playerpos = [1, 0];
            AddEnemy(2, 5, "normal", "up");
            AddEnemy(2, 2, "secret", "left");
            AddEnemy(2, 2, "secret", "up");
            AddEnemy(2, 2, "secret", "right");
            AddEnemy(2, 2, "secret", "down");
            AddEnemy(4, 4, "secret", "left");
            AddEnemy(4, 4, "secret", "up");
            AddEnemy(4, 4, "secret", "right");
            AddEnemy(4, 4, "secret", "down");
            AddObject(5, 4, "goal", "none");
            break;
    }
}