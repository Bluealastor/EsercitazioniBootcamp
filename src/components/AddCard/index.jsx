import { NewData } from "../utils/utils";
import { useEffect, useState } from "react";
import { Modal } from "../Modals/modals";


export const Include = () => {

    const [inputs, setInputs] = useState({})
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        NewData(inputs);
        // console.log('inputs', inputs)
      }


    //   const [modal, setModal] = useState(false);
    //   useEffect(()=>{
    //     setTimeout(function() {
    //       setModal(false)
    //          }, 3000);
    //        },
    //    [modal])

return(
<form onSubmit={handleSubmit}
type="submit">
    <label> Title
        <input placeholder="title" type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}/>
    </label>
    <label> Genres
        <input placeholder="genresArray" type="text"
        name="genresArray"
        value={inputs.genresArray || ""}
        onChange={handleChange}/>
     
    </label>
    <label>Year
        <input placeholder="year"
        type="text"
        name="year"
        value={inputs.year || ""}
        onChange={handleChange}/>

    </label>
    <label> Poster
        <input
        placeholder="poster" type="text"
        name="poster"
        value={inputs.poster || ""}
        onChange={handleChange}/>

    </label>
    <label> Description
        <input placeholder="description" type="text"
        name="description"
        value={inputs.description || ""}
        onChange={handleChange}/>
     
    </label>



<Modal/>

    

</form>

)}

{/* <div>
<input type="text"  placeholder="immagine"/ >
<input type="text" placeholder="titolo"/>
<input type="text" placeholder="anno"/>
<input type="text" placeholder="description"/>

<button onClick={NewData()}>Add Movie^^</button>
</div> */}

// )
// }