// Fonction pour gérer le clic sur le lien
function smoothScrollToTarget(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href'); // Récupère l'attribut href du lien
  const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
}

// Sélectionne tous les liens qui ont un attribut href commençant par "#"
const scrollLinks = document.querySelectorAll('a[href^="#"]');

// Ajoute un gestionnaire d'événement de clic à chaque lien
scrollLinks.forEach(function(link) {
  link.addEventListener('click', smoothScrollToTarget);
});

// APPARITION DU LOGO DE GITHUB

  const imageContainer = document.querySelector('.image-container');
  const imageNb = imageContainer.querySelector('.image_nb');
  const imageLogoGit = imageContainer.querySelector('.image_logo_git');
  
  imageNb.addEventListener('mouseenter', function() {
    imageNb.style.opacity = '0'; // Masquer l'image_nb
    imageLogoGit.style.opacity = '1'; // Afficher l'image_logo_git
  });
  
  imageNb.addEventListener('mouseleave', function() {
    imageNb.style.opacity = '1'; // Afficher à nouveau l'image_nb
    imageLogoGit.style.opacity = '0'; // Masquer l'image_logo_git
  });
  


/*ON DÉFINIT LES VARIABLES */

const buttonCloseModal= document.querySelectorAll('.closebutton_modal');
const modal1_Gallery = document.querySelector('#modal_gallery_photo')


/*OUVRIR LA MODALE 1 */
let modal = null

const openModal = function (e) {
    e.preventDefault()
    const target = document.getElementById('modal_gallery_photo');
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('#nav_modal1').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
    stopPropagation(e);
}
    document.querySelectorAll('.open_modal').forEach(a => {
        a.addEventListener('click', openModal)
    })

    const stopPropagation = function (e) {
        e.stopPropagation()
    }



/*FERMER LES MODALES */
    buttonCloseModal.forEach(buttonCloseModal => buttonCloseModal.addEventListener("click", (e) => {
    e.preventDefault(); 
    closeModal()

}));

/*FERMER LA MODALE QUAND CLIC EN DEHORS DE LA MODALE */

  window.addEventListener('click', function(e) {
    if (e.target != modal1_Gallery) {
      modal1_Gallery.style.display = "none";
      closeModal(e)
    }
  });

function closeModal() {
    modal1_Gallery.style.display = 'none'; 
    modal1_Gallery.setAttribute('aria-hidden', 'true');
    modal1_Gallery.removeAttribute('aria-modal');
}
  /*Fonction pour que la modale se ferme uniquement quand on clique sur la croix ou sur la touche ECHAP*/
    
window.addEventListener('keydown', function(e){ 
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
}) 


/* Fonction pour fermer les modales  */

function closeAllModals() {
  modal1_Gallery.style.display = 'none'; 
  modal1_Gallery.setAttribute('aria-hidden', 'true');
  modal1_Gallery.removeAttribute('aria-modal');
};


// Sélectionnez la div "cards"
const cardsContainer = document.getElementById('cards-container');




// CARROUSEL 1

document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var images = document.getElementsByClassName('images_carrousel');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
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
  
