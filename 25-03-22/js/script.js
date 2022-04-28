/*
RICHIESTA FETCH API
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
    }
};

getMoviesData().then((resultAPI) => {
    resultAPI.map((movie) => {
        createCard(
            movie.title,
            formatMinText(movie.description),
            movie.poster,
            movie.year,
            movie.genres,
            movie.id
        );
    });
});

const q = (element) => document.querySelector(element);

const c = (element) => document.createElement(element)

/*
CREAZIONE CARD
*/
const createCard = (title, description, imgUrl, year, genre, index) => {

    const divEl = c("div");
    const h3El = c("h3");
    const descriptionEl = c("p");
    const imgEl = c("img");
    const yearEl = c("p");
    const genresEl = c("p");
    const delImg = c("img");
    const modalDiv = c("div");

    divEl.classList.add("card");
    h3El.classList.add("movieTitle");
    yearEl.classList.add("movieYear");
    imgEl.classList.add("cardImg");
    genresEl.classList.add("genDesc")
    descriptionEl.classList.add("description");
    delImg.classList.add("delImg");
    modalDiv.classList.add("modalDiv");

    delImg.setAttribute("src", "https://img.utdstc.com/icon/ab1/724/ab1724c13349fb5c4c251bd95c3ead643bc0f7101b895d2318eaf5b73cc2795e:200");
    imgEl.setAttribute("src", imgUrl);
    h3El.textContent = title;
    descriptionEl.textContent = description;
    yearEl.textContent = "Release Date: " + year;
    genresEl.textContent = genre;

    divEl.append(imgEl, h3El, descriptionEl, yearEl, genresEl, delImg);
    q(".wrapperMovies").appendChild(divEl);

    delImg.addEventListener("click", (e) => {
        divEl.remove();
        fetch(`https://edgemony-backend.herokuapp.com/movies/${index}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => location.reload());
    });

    /* 
    CARD MODALE 
    */

    const modalEl = document.querySelector(".modalWrapper");
    const overlayEl = document.querySelector(".overlay");

    divEl.addEventListener("click", () => {

        q(".modalWrapper").innerHTML = divEl.innerHTML;
        modalEl.classList.toggle("showModal");
        overlayEl.classList.toggle("hideOverlay");

    });

    q(".modalWrapper").addEventListener("click", () => {
        location.reload()
    })
};

q("card").addEventListener("click", () => {
    q(".card").style.widht = "100%";
    modalDiv.innerHTML = divEl.innerHTML;
});

// q("overlay").addEventListener("click", () => {

//     modalEl.classList.toggle("showModal");
//     overlayEl.classList.toggle("hideOverlay");
//     delImg.style.widht = "0%";
// });

//

/*
AGGIUNGI FILM
*/
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const genreInputEl = document.getElementById("genres");
const submitInputEl = q("#submit");

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
    }).then(() => location.reload());
});