// //Chiamata API - MI PRENDO I DATI DAL LINK 
async function getAPIdata(URL) {
    const res = await fetch(URL);
    return await res.json();
}



getAPIdata("https://fakestoreapi.com/products").then((data) => {
    data.map((article) => {
        createCards(article.title,
            article.description,
            article.image,
            article.price + " $",
        );
        const insert = document.querySelector(".box")

        insert.forEach(box => {
            box.addEventListner("click", () => (
                    box.remo() = ``)

            )
        });

    })
})

// const createCard = (data) => {
//         data.map((article) => article(createCards.description, createCards.image, createCards.price.data.title) => {


//                 }