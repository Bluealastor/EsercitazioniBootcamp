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



listFilm.innerHTML = movies.map((e) => {
    return `<li>${e}</li>`
}).join(" ");


submit.addEventListener("click", () => {
    const input = add.value.toLowerCase()
    const search = movies.filter((element) =>
        element.toLowerCase().includes(input));
    listFilm.innerHTML = search;
    // debugger; usare come pointer da cancellare prima di stampare usato per analizzare il codice
    if (search.length === 0) {
        listFilm.innerHTML = "mancante"
    }
});

// submit.addEventListener("click", () => {
//     const search = movies.filter((element) =>
//         element.toLowerCase().includes(add.value));
//     // filmSearch.innerHTML = search;

//     listFilm.innerHTML = search + movies.map((e) => {
//         return `
//     <hr> <li>${e}</li>`;
//     }).join(" ");
// });








// const stampa = () => {


//     listFilm.innerHTML = list.map((film) => {
//         `
// <li>
// ${list}
// </li>            
//             `

//     }).join("");
// };

// stampa()