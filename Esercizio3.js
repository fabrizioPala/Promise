/*-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
-Utilizzare setTimeout per simulare un'operazione asincrona.*/
function parioDispari(num){
    return new Promise((resolve, reject) => {
   
      setTimeout(()=>{
        if(num%2==0){
          resolve(`il numero ${num} è pari`)
          }else{
            reject(`il numero ${num} èdispari`)
            
          }
      },2000)
    })
  }
  parioDispari(5)
  .then((result)=>console.log(result))
  .catch((error)=>console.log(error))