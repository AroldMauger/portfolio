/*ON DÉFINIT LES VARIABLES */

const buttonCloseModal2= document.querySelectorAll('.closebutton_modal2');
const modal2_Gallery = document.querySelector('#modal_gallery_photo2')


/*OUVRIR LA MODALE 1 */
let modal = null

const openModal2 = function (e) {
    e.preventDefault()
    const target = document.getElementById('modal_gallery_photo2');
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('#nav_modal2').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    stopPropagation(e);
}

    const link = document.querySelector('.open_modal2');
    link.addEventListener('click', openModal2);

    const stopPropagation = function (e) {
        e.stopPropagation()
    }



/*FERMER LES MODALES */
    buttonCloseModal2.forEach(buttonCloseModal2 => buttonCloseModal2.addEventListener("click", (e) => {
    e.preventDefault(); 
    closeModal()

}));

/*FERMER LA MODALE QUAND CLIC EN DEHORS DE LA MODALE */

window.addEventListener('click', function(e) {
  if (e.target != modal2_Gallery) {
    modal2_Gallery.style.display = "none";
    closeModal(e)
  }
});

function closeModal() {
    modal2_Gallery.style.display = 'none'; 
    modal2_Gallery.setAttribute('aria-hidden', 'true');
    modal2_Gallery.removeAttribute('aria-modal');
}
  /*Fonction pour que la modale se ferme uniquement quand on clique sur la croix ou sur la touche ECHAP*/
    
window.addEventListener('keydown', function(e){ 
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
}) 


/* Fonction pour fermer les modales  */

function closeAllModals() {
    modal2_Gallery.style.display = 'none'; 
    modal2_Gallery.setAttribute('aria-hidden', 'true');
    modal2_Gallery.removeAttribute('aria-modal');
};


// Sélectionnez la div "cards"
const cardsContainer = document.getElementById('cards-container');



// CARROUSEL 2

document.addEventListener('DOMContentLoaded', function() {
  var currentIndex = 0;
  var images = document.getElementsByClassName('images_carrousel2');
  var prevButton = document.getElementById('prevButton2');
  var nextButton = document.getElementById('nextButton2');
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
