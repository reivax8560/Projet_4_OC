function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let form = document.getElementById("formulaire");
let firstName = document.getElementById("first");
let blockFirstName = document.getElementById("blockFirstName");
let lastName = document.getElementById("last");
let blockLastName = document.getElementById("blockLastName");
let email = document.getElementById("email");
let blockEmail = document.getElementById("blockEmail");
let birthDate = document.getElementById("birthdate");
let blockBirthDate = document.getElementById("blockBirthDate");
let quantity = document.getElementById("quantity");
let blockQuantity = document.getElementById("blockQuantity");


/////////////////////////// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/////////////////////////// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function dataValid(block) {
  block.dataset.error = "";
  block.dataset.errorVisible = "false";
}

//////////////////////////////////////// SOUMISSION FORMULAIRE
form.addEventListener('submit', (e) => {

  //////////////// VERIF PRENOM
  if (firstName.value == "" || firstName.value.length < 2) { // ou if(!firstName.value) 
    e.preventDefault();
    blockFirstName.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    blockFirstName.dataset.errorVisible = "true";
  } else {
    dataValid(blockFirstName);
  }
  //////////////// VERIF NOM
  if (lastName.value == "" || lastName.value.length < 2) {
    e.preventDefault();
    blockLastName.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    blockLastName.dataset.errorVisible = "true";
  } else {
    dataValid(blockLastName);
  }
  //////////////// VERIF EMAIL
  function validateEmail(mail) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(mail.value)) {
      e.preventDefault();
      blockEmail.dataset.error = "Vous devez entrer une adresse email valide.";
      blockEmail.dataset.errorVisible = "true";
    } else {
      dataValid(blockEmail);
    }
  }
  validateEmail(email);
  //////////////// VERIF NAISSANCE
  if (birthDate.value == "") {
    e.preventDefault();
    blockBirthDate.dataset.error = "Vous devez entrer votre date de naissance.";
    blockBirthDate.dataset.errorVisible = "true";
  } else {
    dataValid(blockBirthDate);
  }
  //////////////// VERIF NB TOURNOIS
  if (isNaN(quantity.value)) {
    e.preventDefault();
    blockQuantity.dataset.error = "Vous devez entrer un nombre.";
    blockQuantity.dataset.errorVisible = "true";
  } else {
    dataValid(blockQuantity);
  }
  // => limiter entre 0 et 99


});

// vérification quel tournoi cette année (Un bouton radio coché au minimum)
// "Vous devez choisir une option."

// vérification cond utilisation (obligatoirement cochées)
// "Vous devez vérifier que vous acceptez les termes et conditions."


// confirmation utilisateur : "merci pour votre inscription"

// fonctionnalité du bouton "close"