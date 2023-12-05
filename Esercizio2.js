/*-Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.*/
let utente = { id: 1, name: "John" };
let postUtente = ["Post 1", "Post 2", "Post 3"];

function fetchUserData(user) {
  console.log("Recupero dati dell'utente in corso.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I dati dell'utente inserito sono ${JSON.stringify(user)}`);
    }, 2000);
  });
}

function fetchUserPosts(userId, userName) {
  console.log("Recupero post dell'utente in corso.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(postUtente);
    }, 2000);
  });
}

fetchUserData(utente)
  .then((userData) => {
    console.log(`Dati utente recuperati:`, userData);
    return fetchUserPosts(utente.id, utente.name);
  })
  .then((userPosts) => {
    console.log(`Post dell'utente ${utente.name}:`, userPosts);
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
