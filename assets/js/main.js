/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
- nome
- ruolo
- foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.


MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
images.forEach(movies => {
    console.log(movies.image);
    console.log(movies.title);
    console.log(movies.text);
});



//Seleziono l'elemento della DOM immagine in cui posizionare tutte le immagini
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);

// Aggiungo un nuovo elemento nella dom img più descrizione del film
images.forEach((movie) => {
    imagesElement.innerHTML += `
    <div class="movie">
    <h2 class="movie_title">${movie.title}</h2>
    <img class="img-fluid" src="./assets/${movie.image}" alt="Movie">
    <h3 class="movie_description">${movie.text}</h3>
    </div>`;
});


// Seleziono l'immagine attiva 
let activeImage = 0;