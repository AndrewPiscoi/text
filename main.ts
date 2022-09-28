input.onButtonPressed(Button.A, function () {
    basic.showString("what")
    basic.showLeds(`
        # # # # #
        . . . . #
        . # # # #
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("fuck")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("the ")
    basic.showIcon(IconNames.Chessboard)
})
basic.forever(function () {
	
})
