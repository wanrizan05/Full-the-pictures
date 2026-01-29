input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    turtle.pen(TurtlePenMode.Down)
    for (let score = 0; score <= 50; score++) {
        if (Math.randomBoolean()) {
            turtle.forward(1)
        } else if (Math.randomBoolean()) {
            turtle.turnLeft()
        } else if (Math.randomBoolean()) {
            turtle.back(1)
        } else if (Math.randomBoolean()) {
            turtle.turnRight()
        }
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showString("Score:")
    basic.showNumber(randint(0, 1000))
    music.play(music.stringPlayable("C B E G G E B C ", 100), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    turtle.pen(TurtlePenMode.Down)
    for (let score = 0; score <= 50; score++) {
        if (Math.randomBoolean()) {
            turtle.forward(1)
        } else if (Math.randomBoolean()) {
            turtle.turnLeft()
        } else if (Math.randomBoolean()) {
            turtle.back(1)
        } else if (Math.randomBoolean()) {
            turtle.turnRight()
        }
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showString("Score:")
    basic.showNumber(randint(0, 1000))
    music.play(music.stringPlayable("C B E G G E B C ", 100), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
