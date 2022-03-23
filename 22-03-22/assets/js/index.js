// const q = (selector) => document.querySelector(selector);


// const calculator = q("#calculator");
// const fNum = q("#firstNum");
// const sNum = q("#secondNum");
// const resultButton = q("#buttonResult");

// resultButton.addEventListener("click", () => {

//     //   setTimeout(() => console.log("Ciao!"), 1000);
//     setTimeout(() => console.log(parseInt(fNum.value) + parseInt(sNum.value)), 10000)
//         // allert("attendi 10 secondi per il risultato")
//     console.log("l'uguale è male")
// })

/*
Avanzato:

    Riprendendo l'esercizio lasciato Venerdì scorso, provate a sostituire 
    l'array di elementi con una chiamata fetch. 
    Utilizzate le API presenti a questo indirizzo: https://swapi.dev/

(Tips. leggete la documentazione!)
// */
const c = (element) => document.createElement(element)

const displayCard = (nick, world) => {
    const eldiv = c("div")
    const elH2 = c("h2")
    const elH4 = c("h4")


}

let arrayWorld = []

fetch("https://swapi.dev/api/people").then((restitution) => restitution.json()).then((log) => console.log(log))
    .then((result) => result.map(({}) => displayCard(name)))