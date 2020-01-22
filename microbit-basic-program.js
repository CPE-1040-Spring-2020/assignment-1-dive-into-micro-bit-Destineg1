let iconheart: boolean = true // or false


basic.forever(function () {
    if (iconheart) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
    basic.pause(100)
    basic.clearScreen()
})


input.onButtonPressed(Button.A, function () {
    if (iconheart) {
        iconheart = false
    } else {
        iconheart = true
    }
})

