// definire una funzione
/*possiamo inserire dei valori all'internocosì batsa invocare e inserire i valori */
const AddVAT = (value, vat) => {
    const vat = 22;
    const value = 100;
    const add = (value / 100) * vat;
    const total = value + vat;
    console.log(total);
    return total
};


// Wrapper per document.querySelector
/* inserire un value in una variabile
cioe poter inserire un valore alla variabile creata al posto di tutta la stringa
 */
const q = (selector) => document.querySelector(selector);
// O
// const q = (selector) =>{
//  document.querySelector(selector);
//  return document.querySelector()}

q(".card input").addEventListner("change", () => {
    const value = q(".card input").value;
    console.log("cambio valore", value);
    $(".total").innerHTML = AddVAT(123) * num;
});

/*
// Definisco una funzione
// Posso definire degli argomenti, separandoli con una virgola

// Invoco (eseguo) la funzione definita in precedenza
// AddVAT();
console.log(AddVAT(200)); // console.log(244)
console.log(AddVAT(142));

// Wrapper per document.querySelector
const q = (selector) => document.querySelector(selector);

q(".card input").addEventListener("change", () => {
  const value = q(".card input").value;
  const num = parseInt(value);
  // const num = parseInt(q(".card input").value);
  // console.log("cambio valore", value, num);
  q(".total").innerHTML = AddVAT(123) * num;
   */