let temp = false
// LET IT MEASURE AND DISPLAY TEMPERATURE. ALSO, LETS MAKE IT RUN FOREVER!!!
basic.forever(function () {
    temp = true
    while (temp == true) {
        basic.showString("" + input.temperature() + "C")
    }
})
