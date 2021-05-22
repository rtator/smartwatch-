input.onButtonPressed(Button.A, function () {
    music.playMelody("C - C - G - G - ", 120)
    music.playMelody("A - A - G G - F ", 120)
    music.playMelody("- F - E - E - D ", 120)
    music.playMelody("- D - C C - G - ", 120)
    music.playMelody("G G - F - E - E ", 120)
    music.playMelody("D - - G - G - F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let hours = 1
let minutes = 0
let setting = 1
let steps = 0
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
basic.forever(function () {
    if (setting == 1) {
        basic.showString("" + hours + ":" + minutes + "S" + steps)
    }
})
