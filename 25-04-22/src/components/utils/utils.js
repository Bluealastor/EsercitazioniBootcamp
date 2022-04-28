/**
 * 
 * Sulla base della lezione del giorno:

    Creare un file utils.js, all'interno della directory src che:

        includa una funzione per il metodo GET per l'indirizzo https://edgemony-backend.herokuapp.com/movies

        sostituire il fetch al componente <CardList /> con la nuova funzione creata in utils

        includa una funzione per il metodo POST, per l'aggiunta di nuovi movies all'array

        includa una funzione per il metodo DELETE, per la rimozione di un determnato movie

        includa una funzione per il metodo PUT, per modificare un determinato movie

Avanzato

Per i metodo POST, DELETE e PUT, provare ad inserire dei movies a piacere. 
Attenzione: controllare poi la risposta, se alla lista dei movies manca qualche dato
 o se si rompe qualcosa bisogna ripararlo!!
 */
// https://edgemony-backend.herokuapp.com/movies

 export const GetApi = async() => {

      const api = await  fetch("https://edgemony-backend.herokuapp.com/movies")
          const res = await api.json()
          return res
 }



 export const DeletMovie = async (ID) => {

 const deleteItem = await fetch(`https://edgemony-backend.herokuapp.com/movies/${ID}`, {
method: "DELETE",
headers: {"content-type" : "application/JSON"},
  })
  const data = deleteItem.json();
  return data
  };


export const NewData = async (datas) => {
  const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
          description: datas.description,
          genres: datas.genresArray,
          poster: datas.poster,
          title: datas.title,
          year: datas.year
      })
  }).then(() => {
    window.location.reload(false)
  });
}

export const PUT = async (Body,id) => {
  const response = await fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
      method: "PUT",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({Body})
  })
}