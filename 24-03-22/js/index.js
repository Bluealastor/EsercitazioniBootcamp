/* Lezione del 24 / 03 / 2021
Esercizio

Sulla base della lezione odierna:
Creare una pagina web che mostri i risultati ottenuti dalla seguente 
API: https: //edgemony-backend.herokuapp.com/movies
Creare un form che permetta all 'utente di aggiungere un nuovo 
movie all'interno

Aggiungere una 'X'
ad ogni card, rappresentante il movie,
 al cui click rimuove lo stesso dal server

Avanzato
 All 'esercizio cui sopra, provare ad aggiungere una modale
  al cui click mostri la descrizione per intero del movie in questione.
*/
const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

const getMoviesData = async() => {
    const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (res.status >= 200 && res.status <= 299) {
        return await res.json();
    } else {
        const h1El = document.createElement("h1");
        h1El.textContent = "Lista Film non Tovata :(";
        document.body.append(h1El);
    }
};

getMoviesData().then((resultAPI) => {
    resultAPI.map((movie) =>
        createCard(
            movie.id,
            movie.title,
            formatMinText(movie.description),
            movie.poster,
            movie.year
        )
    );
});

const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

submitInputEl.classList.add("subBtn")

submitInputEl.addEventListener("click", (event) => {
    event.preventDefault();

    fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: descInputEl.value,
            genres: ["animation"],
            poster: posterInputEl.value,
            title: titleInputEl.value,
            year: yearInputEl.value,
        }),
    }).then((data) => {
        location.reload();

    });
});

const createCard = (index, title, desc, imgUrl, price) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");
    const delBtn = document.createElement("button")

    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");
    delBtn.classList.add("delBtn")
    h3El.classList.add("title");


    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;
    delBtn.textContent = "Elimina Scheda Film";

    divEl.append(imgEl, h3El, parDescEl, parPriceEl, delBtn);
    document.querySelector(".wrapperMovies").appendChild(divEl);

    delBtn.addEventListener('click', () => {
        fetch(`https://edgemony-backend.herokuapp.com/movies/${index}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => location.reload());
    })
};