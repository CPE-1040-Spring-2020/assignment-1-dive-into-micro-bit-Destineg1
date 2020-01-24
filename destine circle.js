let ball = game.createSprite(2,2)
ball.turn(Direction.Right, 45)
ball.move(2)
basic.forever(function () {
    ball.turn(Direction.Left,45)
    ball.move(1)
    basic.pause(100)
})
