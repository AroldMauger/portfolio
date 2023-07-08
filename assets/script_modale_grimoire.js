/*ON DÉFINIT LES VARIABLES */

const buttonCloseModal4= document.querySelectorAll('.closebutton_modal4');
const modal4_Gallery = document.querySelector('#modal_gallery_photo4')


/*OUVRIR LA MODALE 1 */
let modal = null

const openModal4 = function (e) {
    e.preventDefault()
    const target = document.getElementById('modal_gallery_photo4');
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('#nav_modal4').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    stopPropagation(e);
}

    const link = document.querySelector('.open_modal4');
    link.addEventListener('click', openModal4);

    const stopPropagation = function (e) {
        e.stopPropagation()
    }



/*FERMER LES MODALES */
    buttonCloseModal4.forEach(buttonCloseModal4 => buttonCloseModal4.addEventListener("click", (e) => {
    e.preventDefault(); 
    closeModal()

}));

/*FERMER LA MODALE QUAND CLIC EN DEHORS DE LA MODALE */

window.addEventListener('click', function(e) {
  if (e.target != modal4_Gallery) {
    modal4_Gallery.style.display = "none";
    closeModal(e)
  }
});

function closeModal() {
    modal4_Gallery.style.display = 'none'; 
    modal4_Gallery.setAttribute('aria-hidden', 'true');
    modal4_Gallery.removeAttribute('aria-modal');
}
  /*Fonction pour que la modale se ferme uniquement quand on clique sur la croix ou sur la touche ECHAP*/
    
window.addEventListener('keydown', function(e){ 
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
        e.stopPropagation()
    }
}) 


/* Fonction pour fermer les modales  */

function closeAllModals() {
  modal4_Gallery.style.display = 'none'; 
  modal4_Gallery.setAttribute('aria-hidden', 'true');
  modal4_Gallery.removeAttribute('aria-modal');
};


// Sélectionnez la div "cards"
const cardsContainer = document.getElementById('cards-container');



// CARROUSEL 4

document.addEventListener('DOMContentLoaded', function() {
  var currentIndex = 0;
  var images = document.getElementsByClassName('images_carrousel4');
  var prevButton = document.getElementById('prevButton4');
  var nextButton = document.getElementById('nextButton4');
  var interval;

  function showImage(index) {
    // Masquer toutes les images
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    // Afficher l'image à l'index spécifié
    images[index].style.display = 'block';
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function startInterval() {
    interval = setInterval(nextImage, 3000);
  }

  function stopInterval() {
    clearInterval(interval);
  }

  // Afficher la première image au chargement de la page
  showImage(currentIndex);

  // Associer les événements de clic aux boutons précédent et suivant
  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  // Démarrer l'intervalle de changement automatique des slides
  startInterval();

  // Ajouter la gestion des événements de survol des images
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseenter', stopInterval);
    images[i].addEventListener('mouseleave', startInterval);
  }
  prevButton.addEventListener('mouseenter', stopInterval);
  prevButton.addEventListener('mouseleave', startInterval);
  nextButton.addEventListener('mouseenter', stopInterval);
  nextButton.addEventListener('mouseleave', startInterval);
});
