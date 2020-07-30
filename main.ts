let itérations_avant_prochaine_cométe = 0
basic.forever(function () {
    if (true) {
        led.plot(randint(0, 4), 0)
        basic.pause(1000)
        itérations_avant_prochaine_cométe = 2
    }
    itérations_avant_prochaine_cométe += -1
    for (let colonne = 0; colonne <= 4; colonne++) {
        for (let ligne = 0; ligne <= 4; ligne++) {
            let ligne_invérsé = 0
            if (led.point(colonne, ligne) && led.pointBrightness(colonne, ligne) == 255) {
                led.plotBrightness(colonne, ligne_invérsé, 170)
                led.plotBrightness(colonne, ligne_invérsé + 1, 255)
            } else if (led.pointBrightness(colonne, ligne_invérsé) == 170) {
                led.plotBrightness(colonne, ligne, 85)
            } else if (led.pointBrightness(colonne, ligne_invérsé) == 85) {
                led.plotBrightness(colonne, ligne, 0)
            } else {
            	
            }
        }
    }
})
