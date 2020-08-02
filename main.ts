namespace SpriteKind {
    export const p2 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.floorDark2, function (sprite, location) {
    game.showLongText("goal", DialogLayout.Top)
    info.player2.changeScoreBy(1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 8))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 8))
    tiles.placeOnTile(thep2, tiles.getTileLocation(21, 8))
    mySprite2.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.floorLight2, function (sprite, location) {
    game.showLongText("goal", DialogLayout.Top)
    info.player1.changeScoreBy(1)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 8))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 8))
    tiles.placeOnTile(thep2, tiles.getTileLocation(21, 8))
    mySprite2.setVelocity(0, 0)
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprite.setVelocity(sprite.ax - 20, sprite.ay - 20)
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (controller.left.isPressed()) {
        if (controller.A.isPressed()) {
            otherSprite.vx = -150
        } else {
            otherSprite.vx = -120
        }
    } else {
        if (controller.right.isPressed()) {
            if (controller.A.isPressed()) {
                otherSprite.vx = 150
            } else {
                otherSprite.vx = 120
            }
        } else {
            if (controller.up.isPressed()) {
                if (controller.A.isPressed()) {
                    otherSprite.vx = -150
                } else {
                    otherSprite.vy = -120
                }
            } else {
                if (controller.down.isPressed()) {
                    if (controller.A.isPressed()) {
                        otherSprite.vx = 150
                    } else {
                        otherSprite.vy = 120
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.Food, function (sprite, otherSprite) {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        if (controller.player2.isPressed(ControllerButton.A)) {
            otherSprite.vx = -160
        } else {
            otherSprite.vx = -120
        }
    } else {
        if (controller.player2.isPressed(ControllerButton.Right)) {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                otherSprite.vx = 160
            } else {
                otherSprite.vx = 120
            }
        } else {
            if (controller.player2.isPressed(ControllerButton.Up)) {
                otherSprite.vy = -120
            } else {
                if (controller.player2.isPressed(ControllerButton.Down)) {
                    otherSprite.vy = -120
                }
            }
        }
    }
})
let thep2: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e . . . 
    . . . . . . . . . . . . . . e e . . 
    . . . . . . . . . . . . . . d d d d 
    . . . . . . . . . . . . . . d 1 f d 
    . . . . . . . . . . . . . d d 1 f d 
    d d d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d . . . . 
    d d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . e . e . . . e . e . . . . . . . 
    `, SpriteKind.Player)
mySprite.setImage(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e . . . 
    . . . . . . . . . . . . . . e e . . 
    . . . . . . . . . . . . . . d d d d 
    . . . . . . . . . . . . . . d 1 f d 
    . . . . . . . . . . . . . d d 1 f d 
    d d d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d . . . . 
    d d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d d . . . . . 
    . d d d d d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . d . d . . . d . d . . . . . . . 
    . . e . e . . . e . e . . . . . . . 
    `)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 f 1 1 f 1 1 f 1 . . . . 
    . . 1 f f 1 f f f 1 f f 1 . . . 
    . 1 f f 1 1 1 f 1 1 1 f f 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 f 1 1 1 f 1 1 1 f 1 1 . . 
    . 1 f f f 1 f f f 1 f f f 1 . . 
    . 1 1 f 1 1 1 f 1 1 1 f 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 f f 1 1 1 f 1 1 1 f f 1 . . 
    . . 1 f f 1 f f f 1 f f 1 . . . 
    . . . 1 f 1 1 f 1 1 f 1 . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
tiles.setTilemap(tiles.createTilemap(hex`2800100004020105060708090a0b04020105060708090a0b04020105060708090a0b04020105060708090a0b0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f131b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d0d0e14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f14191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f13191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f0c0d1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1810141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111111111111111111111111111111111111111111111111111111111111111111111111111110`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
    2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
    2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.castle.saplingOak,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.brick], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite2)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(18, 8))
tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 8))
thep2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e . . . . . . . . . . 
    . . e e e . . . . . . . . . . . 
    . e e e . . . . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    4 f 1 4 4 . . . . . . . . . . . 
    4 f 1 4 4 4 . . . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . . 2 4 4 4 4 4 4 4 4 4 2 . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 4 . 4 . . . 4 . 4 . . 
    . . . . . 4 . 4 . . . 4 . 4 . . 
    . . . . . 2 . 2 . . . 2 . 2 . . 
    `, SpriteKind.p2)
controller.player2.moveSprite(thep2)
tiles.placeOnTile(thep2, tiles.getTileLocation(21, 8))
forever(function () {
    tiles.setTilemap(tiles.createTilemap(hex`2800100004020105060708090a0b04020105060708090a0b04020105060708090a0b04020105060708090a0b0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f131b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d0d0e14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f13191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f0c0d1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1810141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111111111111111111111111111111111111111111111111111111111111111111111111111110`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.tile0,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.castle.saplingOak,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.brick,sprites.castle.tileGrass3], TileScale.Sixteen))
    pause(500)
    tiles.setTilemap(tiles.createTilemap(hex`2800100004020105060708090a0b04020105060708090a0b04020105060708090a0b04020105060708090a0b0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f131b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d0d0e14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f13191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f0c0d1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1810141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111111111111111111111111111111111111111111111111111111111111111111111111111110`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.tile0,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.castle.saplingOak,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.brick,sprites.castle.tileGrass3], TileScale.Sixteen))
    pause(500)
    tiles.setTilemap(tiles.createTilemap(hex`2800100004020105060708090a0b04020105060708090a0b04020105060708090a0b04020105060708090a0b0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f131b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d0d0e14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f13191b1d1b1b1f1f1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1f1f1b1b1d1b1a0f14191b1d1b1f1f1f1f1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1f1f1f1b1b1d1b1a0f0c0d1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1810141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111111111111111111111111111111111111111111111111111111111111111111111111111110`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.tile0,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.castle.saplingOak,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.brick,sprites.castle.tileGrass3], TileScale.Sixteen))
    pause(500)
    tiles.setTilemap(tiles.createTilemap(hex`2800100004020105060708090a0b04020105060708090a0b04020105060708090a0b04020105060708090a0b0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f131b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d0d0e14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1e1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1e1b1b1d1b1a0f13191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f14191b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1a0f0c0d1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1810141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f141b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1d1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b1b0f12111111111111111111111111111111111111111111111111111111111111111111111111111110`, img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.tile0,sprites.builtin.crowd2,sprites.builtin.crowd1,sprites.castle.saplingOak,sprites.builtin.crowd0,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.brick,sprites.castle.tileGrass3], TileScale.Sixteen))
    pause(500)
})
forever(function () {
    if (controller.A.isPressed() && !(controller.B.isPressed())) {
        mySprite.startEffect(effects.warmRadial, 100)
        if (controller.left.isPressed()) {
            mySprite.vx = -150
        } else {
            if (controller.right.isPressed()) {
                mySprite.vx = 150
            } else {
                if (controller.down.isPressed()) {
                    mySprite.vy = 150
                } else {
                    if (controller.up.isPressed()) {
                        mySprite.vx = -150
                    }
                }
            }
        }
    } else {
        if (controller.B.isPressed()) {
            mySprite.startEffect(effects.coolRadial, 100)
            if (controller.left.isPressed()) {
                mySprite.vx = -300
            } else {
                if (controller.right.isPressed()) {
                    mySprite.vx = 300
                } else {
                    if (controller.down.isPressed()) {
                        mySprite.vy = 300
                    } else {
                        if (controller.up.isPressed()) {
                            mySprite.vx = -300
                        }
                    }
                }
            }
        } else {
            mySprite.setVelocity(0, 0)
        }
    }
})
forever(function () {
    if (controller.player2.isPressed(ControllerButton.A) && !(controller.player2.isPressed(ControllerButton.B))) {
        thep2.startEffect(effects.warmRadial, 100)
        if (controller.player2.isPressed(ControllerButton.Left)) {
            thep2.vx = -150
        } else {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                thep2.vx = 150
            } else {
                if (controller.player2.isPressed(ControllerButton.Down)) {
                    thep2.vy = 150
                } else {
                    if (controller.player2.isPressed(ControllerButton.Up)) {
                        thep2.vx = -150
                    }
                }
            }
        }
    } else {
        if (controller.player2.isPressed(ControllerButton.B)) {
            thep2.startEffect(effects.coolRadial, 100)
            if (controller.player2.isPressed(ControllerButton.Left)) {
                thep2.vx = -300
            } else {
                if (controller.player2.isPressed(ControllerButton.Right)) {
                    thep2.vx = 300
                } else {
                    if (controller.player2.isPressed(ControllerButton.Down)) {
                        thep2.vy = 300
                    } else {
                        if (controller.player2.isPressed(ControllerButton.Up)) {
                            thep2.vx = -300
                        }
                    }
                }
            }
        } else {
            thep2.setVelocity(0, 0)
        }
    }
})
forever(function () {
    if (info.player2.score() >= 10) {
        effects.confetti.startScreenEffect()
        game.splash("Player 2 wins")
        game.reset()
    } else {
        if (info.player1.score() >= 10) {
            effects.confetti.startScreenEffect()
            game.splash("Player 1 wins")
            game.reset()
        }
    }
})
