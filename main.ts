input.onButtonPressed(Button.A, function () {
    music.playMelody("C - C - G - G - ", 120)
    music.playMelody("A - A - G G - F ", 120)
    music.playMelody("- F - E - E - D ", 120)
    music.playMelody("- D - C C - G - ", 120)
    music.playMelody("G G - F - E - E ", 120)
    music.playMelody("D - - G - G - F ", 120)
    music.playMelody("- F - F - E - E ", 120)
    music.playMelody("D - D - C C C C ", 120)
})
input.onButtonPressed(Button.B, function () {
    setting = 0
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . # . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            . . . . .
            # . . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    }
    basic.showString("Hi!")
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showString("woah!")
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        `)
    basic.showString("oof!")
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . # . . #
        . # . . .
        `)
    basic.showString("huh?")
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . # . # .
        . # . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . # # . .
        . # . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        `)
    basic.showString("ow!")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        `)
    basic.pause(2000)
    basic.showString("ITSALMOSTNIGHT")
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            # . . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    }
    basic.showString("bye!")
    led.setBrightness(107)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    setting = 1
    led.setBrightness(255)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let minutes = 0
let steps = 0
let setting = 0
let hours = 1
setting = 1
basic.forever(function () {
    if (setting == 1) {
        basic.showString("" + hours + ":" + minutes + "ST" + steps)
    }
})
basic.forever(function () {
    for (let index = 0; index < 13; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(60000)
            minutes += 1
        }
        minutes = 0
        hours += 1
    }
    hours = 1
})
