basic.showString("Hello!")
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
music.playMelody("C A F C5 C5 F A C ", 309)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
music.playMelody("B G A C G C5 E G ", 305)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
music.playMelody("A F E G D E D E ", 313)
basic.showLeds(`
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
music.playMelody("E B F - A C5 D A ", 235)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    . . . # .
    # # # # .
    `)
music.playMelody("D - B - E A G A ", 225)
basic.showIcon(IconNames.Heart)
music.playMelody("A F - F D G B F ", 225)
