const q = (selector) => document.querySelector(selector);

const wrapper = q(".card");


const getAPI = async(URL) => {
    const api = await fetch(URL);
    return await api.json();
}

getAPI("https://fakestoreapi.com/products").then((data) => {
    data.map((product) => {
        createCard(product.title, product.image, product.description, product.price);
    })
})

const getShortText = (text) => {

}
const createCard = (title, img, description, price) => {
    const divEl = document.createElement('div');
    const h2El = document.createElement('h2');
    const imgEl = document.createElement('img');
    const parDescEl = document.createElement('p');
    const moneiEl = document.createElement('p');

    divEl.setAttribute('data-desc', description);
    imgEl.setAttribute('src', img);
    moneiEl.classList.add('money');

    h2El.textContent = title.split("").slice(0, 40).join("");
    parDescEl.textContent = description;
    moneiEl.textContent = price + " £";

    wrapper.appendChild(divEl);
    divEl.append(h2El, imgEl, moneiEl);

    const cards = document.querySelectorAll(".card>div");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("animated");
            card.innerHTML = `<p>${card.getAttribute("data-desc")}</p>`;
        })
    })
}