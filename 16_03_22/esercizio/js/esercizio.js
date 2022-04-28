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


// Sezione commenti -------------------------




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
            return `
        <img src="${comment.img}">
        <div>
          <p>${comment.username}</p>
          <p>${comment.email}</p>
        </div>
        <p>${comment.message}</p>
        `;
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