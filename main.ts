namespace SpriteKind {
    export const Indicator = SpriteKind.create()
    export const track = SpriteKind.create()
    export const ghost = SpriteKind.create()
}
function doAJump (sprite: Sprite, jumpheight: number) {
    sprite.vy = 0 - Math.sqrt(2 * (gravity * jumpheight))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    onDied_(sprite)
})
function createTrackAnimations () {
    animationInterval = 80
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        trackSegment = sprites.create(img`
            a a f a a a f a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a a f a a a f a 
            `, SpriteKind.track)
        animation.runImageAnimation(
        trackSegment,
        [img`
            a a f a a a f a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a a f a a a f a 
            `,img`
            a a a f a a a f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a f a a a f a a 
            `,img`
            f a a a f a a a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f a a a f a a a 
            `,img`
            a f a a a f a a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a a a f a a a f 
            `],
        animationInterval,
        true
        )
        tiles.placeOnTile(trackSegment, value)
        tiles.setTileAt(value, assets.tile`myTile10`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        trackSegment = sprites.create(img`
            f a a a f a f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f f 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f a f 
            f a a a a f f f 
            `, SpriteKind.track)
        animation.runImageAnimation(
        trackSegment,
        [img`
            a a f a a a f f 
            f f f f f f f f 
            f f f a a f f a 
            f f a a a a f a 
            f f a a a a f a 
            f f f a a f f f 
            f f f f f f a f 
            a a a f a a f f 
            `,img`
            a a a f a a f f 
            f f f f f f a f 
            f f f a a f f f 
            f f a a a a f a 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f f f 
            a a f a a a f f 
            `,img`
            f a a a f a f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f f 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f a f 
            f a a a a f f f 
            `,img`
            a f a a a f f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f a 
            f f a a a a f f 
            f f f a a f f a 
            f f f f f f a f 
            a a a a f a f f 
            `],
        animationInterval,
        true
        )
        tiles.placeOnTile(trackSegment, value)
        tiles.setTileAt(value, assets.tile`myTile10`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        trackSegment = sprites.create(img`
            f a a a f a f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f f 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f a f 
            f a a a a f f f 
            `, SpriteKind.track)
        animation.runImageAnimation(
        trackSegment,
        [img`
            f f f a a a f a 
            f a f f f f f f 
            a f f a a f f f 
            a f a a a a f f 
            f f a a a a f f 
            a f f a a f f f 
            f a f f f f f f 
            f f a f a a a a 
            `,img`
            f f a f a a a f 
            f a f f f f f f 
            a f f a a f f f 
            f f a a a a f f 
            a f a a a a f f 
            a f f a a f f f 
            f a f f f f f f 
            f f f a a a a f 
            `,img`
            f f a a f a a a 
            f a f f f f f f 
            f f f a a f f f 
            a f a a a a f f 
            a f a a a a f f 
            a f f a a f f f 
            f f f f f f f f 
            f f a a a f a a 
            `,img`
            f f a a a f a a 
            f f f f f f f f 
            a f f a a f f f 
            a f a a a a f f 
            a f a a a a f f 
            f f f a a f f f 
            f a f f f f f f 
            f f a a f a a a 
            `],
        animationInterval,
        true
        )
        tiles.placeOnTile(trackSegment, value)
        tiles.setTileAt(value, assets.tile`myTile10`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        trackSegment = sprites.create(img`
            a a f a a a f a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a a f a a a f a 
            `, SpriteKind.track)
        animation.runImageAnimation(
        trackSegment,
        [img`
            a f a a a f a a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a a a f a a a f 
            `,img`
            f a a a f a a a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f a a a f a a a 
            `,img`
            a a a f a a a f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a f a a a f a a 
            `,img`
            a a f a a a f a 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            f f f f f f f f 
            a a f a a a f a 
            `],
        animationInterval,
        true
        )
        tiles.placeOnTile(trackSegment, value)
        tiles.setTileAt(value, assets.tile`myTile12`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        trackSegment = sprites.create(img`
            f a a a f a f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f f 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f a f 
            f a a a a f f f 
            `, SpriteKind.track)
        animation.runImageAnimation(
        trackSegment,
        [img`
            a f a a a f f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f a 
            f f a a a a f f 
            f f f a a f f a 
            f f f f f f a f 
            a a a a f a f f 
            `,img`
            f a a a f a f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f f 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f a f 
            f a a a a f f f 
            `,img`
            a a a f a a f f 
            f f f f f f a f 
            f f f a a f f f 
            f f a a a a f a 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f f f 
            a a f a a a f f 
            `,img`
            a a f a a a f f 
            f f f f f f f f 
            f f f a a f f a 
            f f a a a a f a 
            f f a a a a f a 
            f f f a a f f f 
            f f f f f f a f 
            a a a f a a f f 
            `],
        animationInterval,
        true
        )
        tiles.placeOnTile(trackSegment, value)
        tiles.setTileAt(value, assets.tile`myTile12`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        trackSegment = sprites.create(img`
            f a a a f a f f 
            f f f f f f a f 
            f f f a a f f a 
            f f a a a a f f 
            f f a a a a f a 
            f f f a a f f a 
            f f f f f f a f 
            f a a a a f f f 
            `, SpriteKind.track)
        animation.runImageAnimation(
        trackSegment,
        [img`
            f f a a a f a a 
            f f f f f f f f 
            a f f a a f f f 
            a f a a a a f f 
            a f a a a a f f 
            f f f a a f f f 
            f a f f f f f f 
            f f a a f a a a 
            `,img`
            f f a a f a a a 
            f a f f f f f f 
            f f f a a f f f 
            a f a a a a f f 
            a f a a a a f f 
            a f f a a f f f 
            f f f f f f f f 
            f f a a a f a a 
            `,img`
            f f a f a a a f 
            f a f f f f f f 
            a f f a a f f f 
            f f a a a a f f 
            a f a a a a f f 
            a f f a a f f f 
            f a f f f f f f 
            f f f a a a a f 
            `,img`
            f f f a a a f a 
            f a f f f f f f 
            a f f a a f f f 
            a f a a a a f f 
            f f a a a a f f 
            a f f a a f f f 
            f a f f f f f f 
            f f a f a a a a 
            `],
        animationInterval,
        true
        )
        tiles.placeOnTile(trackSegment, value)
        tiles.setTileAt(value, assets.tile`myTile12`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        onDied_(sprite)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile10`) && tiles.locationXY(location, tiles.XY.top) >= sprite.bottom) {
        sprite.x += 1
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile12`) && tiles.locationXY(location, tiles.XY.top) >= sprite.bottom) {
        sprite.x += -1
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile18`) && tiles.locationXY(location, tiles.XY.top) >= sprite.bottom) {
        doAJump(sprite, sprites.readDataNumber(sprite, "jumpHeight") * 1.5)
    }
})
function cameraNext () {
    currentPlayers = sprites.allOfKind(SpriteKind.Player)
    for (let index = 0; index <= currentPlayers.length - 1; index++) {
        if (currentPlayers[index] == currentCameraSprite) {
            if (currentCameraSprite) {
                currentCameraSprite.z = 1
            }
            currentCameraSprite = currentPlayers[(index + 1) % currentPlayers.length]
            scene.cameraFollowSprite(currentCameraSprite)
            currentCameraSprite.z = 2
            return
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Top)) {
        onDied_(sprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            doAJump(value, sprites.readDataNumber(value, "jumpHeight"))
        }
    }
})
function setTilemapLevel () {
    if (currentLevel == 1) {
        tiles.setSmallTilemap(tilemap`level8`)
    } else if (currentLevel == 2) {
        tiles.setSmallTilemap(tilemap`level2`)
    } else if (currentLevel == 3) {
        tiles.setSmallTilemap(tilemap`level3`)
    } else if (currentLevel == 4) {
        tiles.setSmallTilemap(tilemap`level4`)
    } else if (currentLevel == 5) {
        tiles.setSmallTilemap(tilemap`level7`)
    } else if (currentLevel == 6) {
        tiles.setSmallTilemap(tilemap`level10`)
    } else if (currentLevel == 7) {
        tiles.setSmallTilemap(tilemap`level12`)
    } else {
        tiles.setSmallTilemap(tilemap`level5`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        if (sprite == currentCameraSprite) {
            cameraNext()
        }
        sprite.destroy()
        info.changeScoreBy(1)
        checkForEnd()
    }
})
function checkForEnd () {
    if (sprites.allOfKind(SpriteKind.Player).length == 0 && !(gameOver)) {
        currentLevel += 1
        gameOver = true
        if (remaining == 0 || currentLevel > 7) {
            story.startCutscene(function () {
                story.setPagePauseLength(99999999, 99999999)
                timer.background(function () {
                    story.printText("Game Over.", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                })
                pause(3000)
                timer.background(function () {
                    story.printText("" + (currentLevel * numberOfPlayers - info.score()) + " didn't make it", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) + 10, 1, 15)
                })
                pause(3000)
                timer.background(function () {
                    story.printText("" + info.score() + " finished", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) + 20, 1, 15)
                })
                pause(3000)
                game.over(info.score() > 0)
            })
        } else {
            story.startCutscene(function () {
                if (remaining == 1) {
                    story.printText("Yikes..... Just made it", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                } else if (remaining == 2) {
                    story.printText("At least they have each other", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                } else if (remaining < 5) {
                    story.printText("Errr.... Maybe try a bit harder next time", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                } else if (remaining < 10) {
                    story.printText("Oh boy... Well, it could have been worse", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                } else if (remaining < 15) {
                    story.printText("Hey that went pretty well!", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                } else if (remaining < 20) {
                    story.printText("WOW! Nice job!", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                } else {
                    story.printText("Perfection.", scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y), 1, 15)
                }
                gameOver = false
                setTilemapLevel()
                startLevel()
            })
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    cameraNext()
})
function onDied_ (sprite: Sprite) {
    if (sprite == currentCameraSprite) {
        cameraNext()
    }
    sprite.destroy()
    remaining += -1
    aghost = sprites.create(img`
        . b b b b b b b . 
        b b b b b b b b b 
        b b f b b b f b b 
        b b b b b b b b b 
        b b b b b b b b b 
        b b b f f f b b b 
        . b b b b b b b . 
        . . b b b b b . . 
        . . . b b b . . . 
        . . . . b . . . . 
        `, SpriteKind.ghost)
    aghost.setPosition(sprite.x, sprite.y)
    animation.runMovementAnimation(
    aghost,
    "q 5 -10 0 -20 q -5 -10 0 -20",
    2000,
    true
    )
    aghost.setFlag(SpriteFlag.Ghost, true)
    aghost.lifespan = 2000
    checkForEnd()
}
function startLevel () {
    characters = [
    img`
        . . 2 2 2 2 . . 
        . 2 2 2 2 2 2 . 
        2 2 . 2 2 . 2 2 
        2 2 . 2 2 . 2 2 
        2 2 2 2 2 2 2 2 
        2 2 . . . . 2 2 
        2 2 2 2 2 2 2 2 
        2 . 2 . . 2 . 2 
        `,
    img`
        . . 5 5 5 . . . 
        . . 5 5 5 . . . 
        . . . 5 . . . . 
        . . 5 5 5 . . . 
        . . 5 5 5 . . . 
        . 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 . 
        . 5 . . . 5 . . 
        `,
    img`
        . . 4 4 4 4 . . 
        . . 4 4 4 4 . . 
        . . 4 4 4 4 . . 
        . . . 4 4 . . . 
        . . 4 4 4 4 . . 
        . 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 . 
        . . 4 4 4 4 . . 
        `,
    img`
        . . . 7 . . . . 
        . . . . 7 . . . 
        . . . . 7 . . . 
        . . . 7 7 7 . . 
        . . 7 7 7 7 7 . 
        . . . 7 7 7 . . 
        . . . 7 7 7 . . 
        . . . 7 7 7 . . 
        `,
    img`
        . 6 6 6 6 6 6 . 
        6 . 6 6 6 6 6 6 
        6 . 6 6 . . . 6 
        6 . 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 
        6 6 . 6 6 . 6 6 
        . 6 6 6 6 6 6 . 
        . . 6 . . 6 . . 
        `,
    img`
        3 . . 3 3 . . 3 
        . 3 . 3 3 . 3 . 
        . 3 3 3 3 3 3 . 
        . . 3 3 3 3 . . 
        . . . 3 3 . . . 
        . . . 3 3 . . . 
        . . 3 3 3 3 . . 
        . . 3 . . 3 . . 
        `
    ]
    for (let index = 0; index < numberOfPlayers; index++) {
        thePlayer = sprites.create(characters._pickRandom(), SpriteKind.Player)
        thePlayer.ay = gravity
        tiles.placeOnRandomTile(thePlayer, assets.tile`myTile11`)
        thePlayer.x += randint(-16, 16)
        controller.moveSprite(thePlayer, randint(65, 110), 0)
        sprites.setDataNumber(thePlayer, "jumpHeight", randint(26, 34))
    }
    scene.cameraFollowSprite(thePlayer)
    currentCameraSprite = thePlayer
    remaining = numberOfPlayers
    tiles.destroySpritesOfKind(SpriteKind.track)
    cameraNext()
    createTrackAnimations()
}
let projectile: Sprite = null
let bleh = 0
let thePlayer: Sprite = null
let characters: Image[] = []
let aghost: Sprite = null
let remaining = 0
let gameOver = false
let currentCameraSprite: Sprite = null
let currentPlayers: Sprite[] = []
let trackSegment: Sprite = null
let animationInterval = 0
let currentLevel = 0
let gravity = 0
let numberOfPlayers = 0
numberOfPlayers = 20
gravity = 500
let jumpHeight = 50
let cameraIndicator = sprites.create(img`
    . 9 9 9 9 9 9 9 9 9 . 
    9 . . . . . . . . . 9 
    9 . 9 9 9 9 9 9 9 . 9 
    . 9 . 9 9 9 9 9 . 9 . 
    . 9 . 9 9 9 9 9 . 9 . 
    . . 9 . 9 9 9 . 9 . . 
    . . 9 . 9 9 9 . 9 . . 
    . . . 9 . 9 . 9 . . . 
    . . . 9 . 9 . 9 . . . 
    . . . . 9 . 9 . . . . 
    . . . . 9 . 9 . . . . 
    . . . . . 9 . . . . . 
    . . . . . 9 . . . . . 
    `, SpriteKind.Indicator)
cameraIndicator.z = 10
cameraIndicator.setFlag(SpriteFlag.Ghost, true)
currentLevel = 0
setTilemapLevel()
startLevel()
game.onUpdate(function () {
    cameraIndicator.x = currentCameraSprite.x
    cameraIndicator.bottom = currentCameraSprite.top - 7 + Math.sin(bleh / 20) * 5
    bleh += 1
})
game.onUpdateInterval(2500, function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . 6 . . 
            . . . . 6 . 
            6 6 6 6 6 6 
            . . . . 6 . 
            . . . 6 . . 
            `, 50, 0)
        tiles.placeOnTile(projectile, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        projectile = sprites.createProjectileFromSide(img`
            . . 6 . . . 
            . 6 . . . . 
            6 6 6 6 6 6 
            . 6 . . . . 
            . . 6 . . . 
            `, -50, 0)
        tiles.placeOnTile(projectile, value)
    }
})
game.onUpdateInterval(500, function () {
    checkForEnd()
})
forever(function () {
    cameraIndicator.image.replace(9, 13)
    pause(500)
    cameraIndicator.image.replace(13, 9)
    pause(500)
})
