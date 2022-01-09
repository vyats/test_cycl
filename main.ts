let ind_y = 0
let ind_x = 0
let t_pause = 100
basic.clearScreen()
basic.forever(function () {
    for (let ind_y = 0; ind_y <= 4; ind_y++) {
        for (let ind_x = 0; ind_x <= 4; ind_x++) {
            led.plot(ind_x, ind_y)
            basic.pause(t_pause)
        }
    }
    for (let ind_y = 0; ind_y <= 4; ind_y++) {
        for (let ind_x = 0; ind_x <= 4; ind_x++) {
            led.unplot(ind_x, ind_y)
            basic.pause(t_pause)
        }
    }
})
