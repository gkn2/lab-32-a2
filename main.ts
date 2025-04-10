let greeting = "Hello "
function change_greeting() {
    return greeting + "World!"
}

let mySprite = sprites.create(assets.image`mc`, SpriteKind.Player)
mySprite.say(change_greeting())
