/*
 Lezione del 21/03/2021
Esercizio

Sulla base della lezione odierna, e riprendendo le esercitazioni passate, creare una rubrica completa! Che:

    mostri la lista dei contatti presenti (createne pure una a scelta di almeno 5 individui)
    permette l'aggiunta di nomi alla lista dei contatti
    permetta la rimozione di un determinato contatto (scegliete l'approccio che preferite)
    che conservi e peschi la lista dei contatti servendoci del LocalStorage

Il tutto dovrà essere completo di html/css, di fatto dobbiamo creare una rubrica utilizzabile dagli ipotetici utenti.

Avanzato:

Per chi volesse cimentarsi già con l'implementazione di try/catch, provare ad integrare nell'esercizio sopra un controllo per ognuna delle quattro funzionalità.
*/
const addressHero = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhand - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
];

const q = (selector) => document.querySelector(selector);
const buttonAdd = q("#buttonAdd");
const usersAdd = q("#usersAdd");
const cardHero = q("#cardHero");


const display = (value = "") => {
    const displayHero = addressHero.filter((hero) =>
        hero.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

    cardHero.innerHTML = addressHero.map((element) => {
        return `
<p>${element}</p>
`;
    }).join("");
}

display();

buttonAdd.addEventListener("click", () => {
    const adder = addressHero.push(`<p>${usersAdd.value}</p>`);
    // localStorage.getItem("adder", JSON.stringify(adder));
    display();

})