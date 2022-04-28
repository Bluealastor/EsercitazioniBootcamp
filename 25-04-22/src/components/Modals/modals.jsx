import React, { useState } from "react";
import { useEffect } from "react";
import "./modals.css";

export const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  useEffect(()=>{
    setTimeout(function() {
      setModal(false)
         }, 3000);
       },
   [modal])

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
       Add Movie^^
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hai aggiunto un film con successo</h2>


          </div> 
        </div>
      )}
      </>
  );
}

