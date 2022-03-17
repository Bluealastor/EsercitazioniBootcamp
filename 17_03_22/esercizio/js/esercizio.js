/*
Dato un array di film:

    "stampare" questi in pagina in una lista HTML
    aggiungere una input di testo e un button sopra la lista, quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input
    [opzionalmente] stilare il tutto

*/




const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
];

const listFilm = document.querySelector("#listaFilm");
const submit = document.querySelector("#submit");
const add = document.querySelector("#add");


const film = () => {

    const list = movies.filter((element) =>
            element.toLowerCase().includes(add.value))
        .join("")
    listFilm.innerHTML = movies.map((e) => {
        return `<li>${e}</li>`
    }).join(" ");;
}

film()

submit.addEventListener("click", () => {
    const search = movies.filter((element) =>
        element.toLowerCase().includes(add.value));
    // filmSearch.innerHTML = search;

    listFilm.innerHTML = search;


});
