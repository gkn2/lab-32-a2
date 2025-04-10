greeting = "Hello "  



def change_greeting():
    return greeting + "World!"



mySprite = sprites.create(assets.image("""mc"""), SpriteKind.player)



mySprite.say(change_greeting())