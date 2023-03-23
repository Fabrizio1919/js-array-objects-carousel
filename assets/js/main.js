/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
- nome
- ruolo
- foto

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

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

/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */

//Seleziono l'elemento della DOM immagine in cui posizionare tutte le immagini
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);

// operatore ternario
// condizione ? risultato con true : risultato con false

// Aggiungo un nuovo elemento nella dom img più descrizione del film
images.forEach((movie, i) => {
    let isActive = '';
    if (i === 0) {
        isActive = 'active'
    } else{
        isActive = ''
    }
    imagesElement.innerHTML += `
    <div class="movie ${isActive}">
    <h2 class="movie_title text-center">${movie.title}</h2>
    <img class="img-fluid" src="./assets/${movie.image}" alt="Movie" ${i}>
    <h6 class="movie_description text-center">${movie.text}</h6>
    </div>`;
});

// Seleziono l'immagine attiva 
let activeImage = 0;


// Seleziono slider
const slideImagesElements = document.querySelectorAll('.slider > .images > .movie')
// clic sul button Prev
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
    console.log('cliccato next');
    console.log(slideImagesElements);
    // Seleziono currentSlide e loggo in console
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);
    currentSlide.classList.remove('active')
    activeImage++
    slideImagesElements[activeImage].classList.add('active')
    const nextImage = slideImagesElements[activeImage]
    console.log(nextImage);
    nextImage.classList.add('active')

})

// clic sul button Next
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
    console.log('cliccato prev');
    console.log(slideImagesElements);
    // Seleziono currentSlide e loggo in cosole
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);
    currentSlide.classList.remove('active')
    activeImage--
    const nextImage = slideImagesElements[activeImage]
    console.log(nextImage);
    nextImage.classList.add('active')
})




/* if (activeImage, === 4) {
    activeImage = 0
} else {
    activeImage++
}

if (activeImage, === 4) {
    activeImage = 0
} else {
    activeImage--
}
 */






