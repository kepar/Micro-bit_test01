let pause2 = 0
input.onPinPressed(TouchPin.P0, function () {
    led.plot(0, 0)
})
function spiraal () {
    pause2 = 200
    basic.pause(pause2)
    led.toggle(0, 0)
    basic.pause(pause2)
    led.toggle(1, 0)
    basic.pause(pause2)
    led.toggle(2, 0)
    basic.pause(pause2)
    led.toggle(3, 0)
    basic.pause(pause2)
    led.toggle(4, 0)
    basic.pause(pause2)
    led.toggle(4, 1)
    basic.pause(pause2)
    led.toggle(4, 2)
    basic.pause(pause2)
    led.toggle(4, 3)
    basic.pause(pause2)
    led.toggle(4, 4)
    basic.pause(pause2)
    led.toggle(3, 4)
    basic.pause(pause2)
    led.toggle(2, 4)
    basic.pause(pause2)
    led.toggle(1, 4)
    basic.pause(pause2)
    led.toggle(0, 4)
    basic.pause(pause2)
    led.toggle(0, 3)
    basic.pause(pause2)
    led.toggle(0, 2)
    basic.pause(pause2)
    led.toggle(0, 1)
    basic.pause(pause2)
    led.toggle(1, 1)
    basic.pause(pause2)
    led.toggle(2, 1)
    basic.pause(pause2)
    led.toggle(3, 1)
    basic.pause(pause2)
    led.toggle(3, 2)
    basic.pause(pause2)
    led.toggle(3, 3)
    basic.pause(pause2)
    led.toggle(2, 3)
    basic.pause(pause2)
    led.toggle(1, 3)
    basic.pause(pause2)
    led.toggle(1, 2)
    basic.pause(pause2)
    led.toggle(2, 2)
}
input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 4; y++) {
        // basic.pause(200)
        // led.toggle(x, y)
        for (let x = 0; x <= 4; x++) {
            basic.pause(200)
            led.toggle(x, y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    // JingleBells()
    spiraal()
    input.onPinPressed(TouchPin.P0, function () {
    JingleBells()
})
})
function JingleBells () {
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})
