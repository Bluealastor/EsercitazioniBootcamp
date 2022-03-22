/*
Esercizio



Realizzare una piccola web app per visualizzare delle card con i nomi del personaggi e l'universo di appartenenza stilati in maniera differente.

Requisiti:

    visualizzazione dati iniziale
    filtrare i dati nella lista utilizzando una ricerca testuale
    possibilità di aggiungere un nuovo elemento tramite due campi di testo (nome e universo)
    stilare gli elementi in lista per trasformarli in "cards"

Screenshot: ./_docs/screen1.png
*/


// Dato il seguente array:

const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
];

const q = (element) => document.querySelector(element)
const inputUnivers = q("#univers");
const inputName = q("#name");
const button = q("#button");
const search = q("#search");
const ul = q("#show");
const del = q("#delete")
const adder = [];



const render = (value = "") => {
    const results = people.filter((character) =>
        character.toLowerCase().includes(value.toLowerCase())
    );

    ul.innerHTML = results
        .map((character) => character.split(" - "))
        .map(
            (character) => `<div class="box">
            <p class="name">${character[0]}</p>
            <p class="universe">${character[1]}</p>
          </div>`
        )
        .join("");
};
render()

// ricerca personaggio
search.addEventListener("keyup", () => {
    const wanted = people.filter((element) => element.toLowerCase().includes(search.value))
    ul.innerHTML = wanted.map((element) => `<div class="card><p>${element}</p></div>`).join("");
});

//  aggiungi personaggio
button.addEventListener("click", () => {
    const newPeople = people.push(`
        ${inputName.value} - ${inputUnivers.value}`);

    render()

})