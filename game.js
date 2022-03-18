function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shifumi() {
    // Generating a random number which will be transformed in a sign.
    let randomNumber = 0;
    randomNumber = getRandomInt(3);


    // Transforming number in sign.
    let sign = "";
    switch (randomNumber){
        case 1: 
            sign = "Pierre";
            break;  
        case 2: 
            sign = "Feuille";
            break;  
        case 3: 
            sign = "Ciseaux";
            break;
        default:
            sign = "Not working"
            break;
    }

    const playerSign = document.getElementById("playerArea");
    const computerSign = document.getElementById("computerArea");

}

shifumi();