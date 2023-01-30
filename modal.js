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
const confirm = document.getElementById("confirm");

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
let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");
let location4 = document.getElementById("location4");
let location5 = document.getElementById("location5");
let location6 = document.getElementById("location6");
let blockRadio = document.getElementById("blockRadio");
let checkbox1 = document.getElementById("checkbox1");
let blockCheckbox = document.getElementById("blockCheckbox");

/////////////////////////// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/////////////////////////// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//////////////////////////////////////// SOUMISSION FORMULAIRE
function dataValid(block) {
  block.dataset.error = "";
  block.dataset.errorVisible = "false";
}
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
  function validateQuantity(number) {
    let regex = /^([0-9]){1,2}$/;
    if (!regex.test(number.value)) {
      e.preventDefault();
      blockQuantity.dataset.error = "Vous devez entrer un nombre entre 0 et 99.";
      blockQuantity.dataset.errorVisible = "true";
    } else {
      dataValid(blockQuantity);
    }
  }
  validateQuantity(quantity);
  //////////////// VERIF TOURNOI COCHÉ
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    e.preventDefault();
    blockRadio.dataset.error = "Vous devez choisir une option.";
    blockRadio.dataset.errorVisible = "true";
  } else {
    dataValid(blockRadio);
  }
  //////////////// VERIF COND UTILISATION
  if (!checkbox1.checked) {
    e.preventDefault();
    blockCheckbox.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
    blockCheckbox.dataset.errorVisible = "true";
  } else {
    dataValid(blockCheckbox);
  }
});

// si formulaire valide -> div classe confirm en display "flex"
// définir fonction validate() qui retourne "true"




// fonctionnalité du bouton "close"