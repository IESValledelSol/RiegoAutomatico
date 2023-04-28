let NivelHumedad = 0
let NivelAgua = 0
let Segundos = 1
let ConsignaNivelAgua = 0.5
let ConsignaNivelHumedad = 0.5
pins.digitalWritePin(DigitalPin.P8, 0)
while (true) {
    NivelAgua = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    500,
    0,
    1
    )
    NivelHumedad = pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    500,
    0,
    1
    )
    if (NivelHumedad >= ConsignaNivelHumedad) {
        basic.showIcon(IconNames.Happy)
    } else {
        if (NivelAgua >= ConsignaNivelAgua) {
            basic.showLeds(`
                # . . . #
                . # . . .
                # . # . #
                . # . # .
                . . # . #
                `)
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.pause(1000 * Segundos)
            pins.digitalWritePin(DigitalPin.P8, 0)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
    while (input.buttonIsPressed(Button.A)) {
        if (NivelAgua >= ConsignaNivelAgua) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            basic.showLeds(`
                # . . . #
                . # . . .
                # . # . #
                . # . # .
                . . # . #
                `)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
    }
    while (input.buttonIsPressed(Button.B)) {
        Segundos = Segundos + 1
        if (Segundos > 9) {
            Segundos = 1
        }
        basic.showNumber(Segundos)
    }
    basic.pause(1000)
}
