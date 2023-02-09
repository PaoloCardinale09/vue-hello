// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

// console.log("oj", Vue);

// CREO APP
const app = Vue.createApp({
  data() {
    return {
      message: "ciao",
    };
  },
});

// MONTO APP
app.mount("#root");
