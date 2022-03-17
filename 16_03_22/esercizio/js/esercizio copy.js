// Esercizio
// Dato un array di citazio`ni, tramite un pulsante verrà visualizzata una citazione casuale per volta

// const randomic = () => {
//     const quotes = [
//         "Io sono tuo padre!",
//         "guerra nessuno fatto grande",
//         "fare o non fare... non c'è provare",
//         "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
//         "Sto più in alto di te!",
//         ".... (cit. Darth Maul)",
//         "Eri come un fratello per me! (pianto)",
//     ];
//     const i = parseInt(Math.random() * (quotes.length - 1));
//     return quotes[i];
// }

// console.log(randomic())

const div = document.querySelector("#citrandom");

document.querySelector("button").addEventListener("click", () => {
    // const magic = () => {
    const quotes = [
        "Io sono tuo padre!",
        "guerra nessuno fatto grande",
        "fare o non fare... non c'è provare",
        "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
        "Sto più in alto di te!",
        ".... (cit. Darth Maul)",
        "Eri come un fratello per me! (pianto)",
    ];

    let i = Math.floor(Math.random() * (quotes.length));
    div.innerHTML = quotes[i];
    // }
})

// const randomic = () => {
//     const quotes = [
//         "Io sono tuo padre!",
//         "guerra nessuno fatto grande",
//         "fare o non fare... non c'è provare",
//         "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
//         "Sto più in alto di te!",
//         ".... (cit. Darth Maul)",
//         "Eri come un fratello per me! (pianto)",
//     ];
//     const i = parseInt(Math.random() * (quotes.length - 1));
//     return quotes[i];
// }

// console.log(randomic())


// Migliorare la "sezione commenti" vista oggi insieme, aggiungendo oltre al testo del commento:
// il nome dell'utente
// l'email
// una foto profilo (un URL: https://randomuser.me/photos)


// Sezione commenti

// const input = document.querySelector("#input");
// const submit = document.querySelector("#submit");
// const naming = document.querySelector("#naming");
// const email = document.querySelector("#mail");
// const commentsList = document.querySelector("#comments");
// const avatar = document.querySelector("#avatar")
// const comments = []



// const renderComments = () => {

//     // Versione "one-liner"
//     commentsList.innerHTML = comments.map(
//             (comment) => `<li>
//             <img src="${avatar}">
//             <p>${naming}</p>
//             <p>${email}</p>
//             <p>${input}</p>
//             </li>`
//         )
//         .join("");
// };

// submit.addEventListener("click", () => {
//     comments.push({
//         text: input.value,
//         name: username.value,
//         email: email.value,
//         immagine: img.value,
//     });
//     text.value = "";
//     email.value = "";
//     immagine.value = "";
//     avatar.value = "";
//     renderComments();
// });
// renderComments();
// console.log(typeof renderComments());


// -----------------------------------------


const message = document.querySelector("#input");
const img = document.querySelector("#avatar");
const username = document.querySelector("#naming");
const email = document.querySelector("#mail");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");

const comments = [];



const renderComments = () => {
    commentsList.innerHTML = comments
        .map((comment) => {
            `<img src="${comment.img}" alt="Foto Profilo">
        <div class="userData">
          <h4>Utente: ${comment.username}</h4>
          <small>${comment.email}</small>
        </div>
        <p class="message">${comment.message}</p>`;
        })
        .join("");
}

submit.addEventListener("click", () => {
    comments.push({
        message: message.value,
        username: username.value,
        email: email.value,
        img: img.value,
    });
    message.value = "";
    username.value = "";
    email.value = "";
    img.value = "";
    renderComments();
});

renderComments();