/*Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 
6 utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
function fetchDataFromAPI() {
  //....
}

fetchDataFromAPI()
*/

let obj = {
  name: "Jhon",
  age: 30
};


function fetchDataFromAPI(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject("Errore: dati non disponibili");
      }
    }, 1000);
  });
}

fetchDataFromAPI(obj)
  .then((result) => {
    console.log("Dati ricevuti:", result);
  })
  .catch((error) => {
    console.error("Errore durante il recupero dei dati:", error);
  });

