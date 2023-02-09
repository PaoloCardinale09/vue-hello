// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

// console.log("oj", Vue);

// CREO APP
const app = Vue.createApp({
  data() {
    return {
      saluto: "ciao",
      nome: "Paolo",
      cognome: "Cardinale",
      immagine:
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2022/03/the_sun_in_high_resolution/24010613-1-eng-GB/The_Sun_in_high_resolution_pillars.jpg",
    };
  },
});

// MONTO APP
app.mount("#root");
