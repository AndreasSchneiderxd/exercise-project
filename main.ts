controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    MrPoopyButthole.setImage(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SwordSwung = true
    MrPoopyButthole.setImage(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . 1 1 
        . . e b f b 5 b b 5 b c b e 9 9 
        . . e e f 5 5 5 5 5 5 f e e 9 9 
        . . . . c b 5 5 5 5 b c . . 1 1 
        . . . . . f f f f f f . . . . . 
        `)
    pause(500)
    MrPoopyButthole.setImage(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
    SwordSwung = false
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    MrPoopyButthole.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 5 c . . . . . . 
        . . . . c c 5 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b e e f f . . . 
        . . . . . f e e e b b e f . . . 
        . . . . f 5 b b e b b e . . . . 
        . . . . c 5 5 5 5 e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    currentLevel += 1
    changeLevel(currentLevel)
    scene.cameraShake(4, 500)
})
function changeLevel (levelNum: number) {
    if (levelNum == 0) {
        tiles.setTilemap(tilemap`Prøve lvl 1`)
        scene.setBackgroundColor(13)
        tiles.placeOnRandomTile(MrPoopyButthole, sprites.castle.tilePath5)
        for (let index = 0; index < 4; index++) {
            _1stEnemy = sprites.create(img`
                ......ffff..............
                ....fff22fff............
                ...fff2222fff...........
                ..fffeeeeeefff..........
                ..ffe222222eef..........
                ..fe2ffffff2ef..........
                ..ffffeeeeffff......ccc.
                .ffefbf44fbfeff....cddc.
                .ffefbf44fbfeff...cddc..
                .fee4dddddd4eef.ccddc...
                fdfeeddddd4eeffecddc....
                fbffee4444ee4fddccc.....
                fbf4f222222f1edde.......
                fcf.f222222f44ee........
                .ff.f445544f............
                ....ffffffff............
                .....ff..ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            _1stEnemy.setPosition(randint(20, 232), randint(20, 232))
            _1stEnemy.follow(MrPoopyButthole, 20)
        }
    } else if (levelNum == 1) {
        for (let index = 0; index < 4; index++) {
            _1stEnemy.destroy(effects.ashes, 500)
        }
        for (let index = 0; index < 4; index++) {
            _2ndEnemy = sprites.create(img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111dbf......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd111ddddddf......
                ......fd1dddddddbf......
                ......fd1dfbddbbff......
                ......fbddfcdbbcf.......
                .....ffffccddbfff.......
                ....fcb1bbbfcffff.......
                ....f1b1dcffffffff......
                ....fdfdf..ffffffffff...
                .....f.f.....ffffff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            _2ndEnemy.setPosition(randint(20, 232), randint(20, 232))
            _2ndEnemy.follow(MrPoopyButthole, 20)
        }
        tiles.placeOnRandomTile(MrPoopyButthole, sprites.dungeon.darkGroundNorthEast1)
        tiles.setTilemap(tilemap`level2`)
    } else if (levelNum == 2) {
        for (let index = 0; index < 4; index++) {
            _2ndEnemy.destroy(effects.ashes, 500)
        }
        for (let index = 0; index < 4; index++) {
            _3rdEnemy = sprites.create(img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c 1 b b b 1 b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b 1 f f 1 c b b b b f . . . . 
                f f 1 f f 1 f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `, SpriteKind.Enemy)
            _3rdEnemy.setPosition(randint(20, 232), randint(20, 232))
            _3rdEnemy.follow(MrPoopyButthole, 20)
        }
        tiles.placeOnRandomTile(MrPoopyButthole, sprites.castle.tilePath5)
        tiles.setTilemap(tilemap`level3`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MrPoopyButthole.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 5 c c . . . . . . 
        . . . . c c c 5 5 5 c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f e e b b b b f . . . . 
        . . . f e b b e e e f . . . . . 
        . . . . e b b e b b 5 f . . . . 
        . . . . f e e 5 5 5 5 c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    MrPoopyButthole.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 5 5 f e e . . 
        . . . . c e e 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        otherSprite.destroy(effects.ashes, 200)
    } else {
        info.changeLifeBy(-1)
    }
})
let _3rdEnemy: Sprite = null
let _2ndEnemy: Sprite = null
let _1stEnemy: Sprite = null
let SwordSwung = false
let currentLevel = 0
let MrPoopyButthole: Sprite = null
info.setLife(3)
MrPoopyButthole = sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 5 b c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 5 b b 5 b c b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(MrPoopyButthole)
currentLevel = 0
changeLevel(0)
scene.cameraFollowSprite(MrPoopyButthole)
