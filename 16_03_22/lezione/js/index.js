const items = document.querySelectorAll("ul li");


/*
uguale ad per ad ogni elemento(in questo caso tutti perchè 0);
/*
 si deve aggire fino ad lunghezza(lenght) oggetto(items);
  incrementa di 1 */
/*
  for (let i = 0; i < items.lenght; i++){
    console.log("ciclo array (nodelist)");
};
*/

// FOREACH
// forEach e la semplificazione di for(in for si deve impostare la partenza e l'arrivo)
// items.forEach(() => {
//     console.log("ciclo array (nodelist)");
// });
// const cb = (element, index) => {
//     // console.log("ciclo array(nodelist)", element, index)
//     // creo una constante per semplificare il codice 
//     /* innerHTML serve a selezionare gli elementi html */
//     const text = element.innerHTML;
//     // con console.log gli dico di mandare a schermo la lista
//     console.log(text);
//     // per ogni interazione della lista
//     element.innerHTML = text.toUpperCase();
//     // element.style.color = "red";
// };

// items.forEach(cb)
// ====================

// creare una lista da js

const things = [
    "pulire i pavimenti",
    "lavare i piatti",
    "buttare la spazzatura",
    "stirare",
];

const ul = document.querySelector("#dinamica");
// usando la funzione .map simile a forEach ma crea un array senza utilizzare un array vuoto
// prendi un array e creami una nuova array con le modifiche richiesta

// Trasformo "things" in "htmlThings" con .forEach()

// const htmlThings = things.map((element) => {
//     // return "<li>" + element + "</li>"
//     return `<li>${element}</li>`
// })
// Backtick `
// semplificare il Tutto
// const htmlThings = things.map((element) => `<li>${element}</li>`);

// Trasformo "things" in "htmlThings" con .forEach()
// const htmlThings = [];

// things.forEach((e,i) => {
//   htmlThings[i] = '<li>' + e + '</li>';
// })

// Sono la stessa cosa!
// '<li>' + element + '</li>'
// `<li>${element}</li>`

// ul.innerHTML = htmlThings
// stampa anche le vorgole essendo un array di elementi e non una array di stringa 
// per eliminare le virgole usare .join perchè dobbiamo usare una stringa.
// ul.innerHTML = htmlThings.join("")
//all'interno delle virgolette mettiamo il tipo di divisore nell'array di stringa
//  e lo modificherà di conseguenza
// console.log(htmlThings, things);
const render = () => {
    const random = Math.ceil(Math.random() * 3);
    const htmlThings = things.map(
        (element) => `<li class="colore${random}">${element}</li>`
    );

    ul.innerHTML = htmlThings.join("");
};
render();

// document.querySelector('button').addEventListener('click', () => {
//     // inseriamo un valore nella lista grazie a button
//     things.push("una stringa")
//     render()
// })

document.querySelector("button").addEventListener("click", () => {
    const random = Math.floor(Math.random() * 99);
    things.push(`diamo i numeri!! ${random}`);
    render();
})

// console.log(htmlThings, things);


// --------
// Sezione commenti

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");

const comments = [];

const renderComments = () => {
    // Versione "separata"
    // const commentItems = comments.map(
    //   (comment) => `<li>
    //     <h4>Utente anonimo (vigliacco)</h4>
    //     <p>${comment}</p>
    //   </li>`
    // );

    // commentsList.innerHTML = commentItems.join("");

    // Versione "one-liner"
    commentsList.innerHTML = comments
        .map(
            (comment) => `<li>
        <h4>Utente anonimo (vigliacco)</h4>
        <p>${comment}</p>
      </li>`
        )
        .join("");
};

submit.addEventListener("click", () => {
    comments.push(input.value);
    input.value = "";
    renderComments();
});

renderComments();