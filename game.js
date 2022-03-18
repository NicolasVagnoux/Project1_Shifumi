function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shifumi() {
    // Generating a random number which will be transformed in a sign.
    let randomNumber = 0;
    randomNumber = getRandomInt(3);
    const playerSign = document.getElementBy("playerArea");
    document.getElementsByClassName("game__result__computer").scr = url("assets/FeuilleDroite.png");

    // Transforming number in sign.
    // switch (randomNumber){
    //     case 1: 
    //         computerSign.scr = url("../assets/PierreDroite.png");
    //         break;  
    //     case 2: 
    //         computerSign.scr = url("../assets/CiseauxDroite.png");
    //         break;  
    //     case 3: 
    //         computerSign.scr = url("../assets/FeuilleDroite.png");
    //         break;
    //     default:
    //         computerSign = "Not working"
    //         break;
    // }
}
shifumi();