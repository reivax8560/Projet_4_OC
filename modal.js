function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function dataValid(formdata) {
  formdata.dataset.error = "";
  formdata.dataset.errorVisible = "false";
}
////////////////////////////////////// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("formulaire");
const closeForm = document.getElementById("closeForm");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const confirmPage = document.getElementById("confirmpage");
const closeConfirmpage = document.querySelectorAll(".closeConfirmpage");

const regex1 = /^([A-Za-zàâéèëêïîôùüçœ\-\']){2,}$/;
const regex2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regex3 = /^([0-9]){1,2}$/;
//////////////////////////////////////// AFFICHAGE DU FORMULAIRE
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));
//////////////////////////////////////// FERMETURE DU FORMULAIRE
closeForm.addEventListener('click', () => {
  modalbg.style.display = "none";
});

//////////////////////////////////////// VALIDATION DU FORMULAIRE
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //////////////// VERIF PRENOM
  if (!regex1.test(firstName.value)) {
    formData[0].dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formData[0].dataset.errorVisible = "true";
  } else {
    dataValid(formData[0]);
  }
  //////////////// VERIF NOM
  if (!regex1.test(lastName.value)) {
    formData[1].dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formData[1].dataset.errorVisible = "true";
  } else {
    dataValid(formData[1]);
  }
  //////////////// VERIF EMAIL
  if (!regex2.test(email.value)) {
    formData[2].dataset.error = "Vous devez entrer une adresse email valide.";
    formData[2].dataset.errorVisible = "true";
  } else {
    dataValid(formData[2]);
  }
  //////////////// VERIF NAISSANCE
  if (birthDate.value == "") {
    formData[3].dataset.error = "Vous devez entrer votre date de naissance.";
    formData[3].dataset.errorVisible = "true";
  } else {
    dataValid(formData[3]);
  }
  //////////////// VERIF NB TOURNOIS
  if (!regex3.test(quantity.value)) {
    formData[4].dataset.error = "Vous devez entrer un nombre entre 0 et 99.";
    formData[4].dataset.errorVisible = "true";
  } else {
    dataValid(formData[4]);
  }
  //////////////// VERIF TOURNOI COCHÉ
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    formData[5].dataset.error = "Vous devez choisir une option.";
    formData[5].dataset.errorVisible = "true";
  } else {
    dataValid(formData[5]);
  }
  //////////////// VERIF COND UTILISATION
  if (!checkbox1.checked) {
    formData[6].dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
    formData[6].dataset.errorVisible = "true";
  } else {
    dataValid(formData[6]);
  }
  //////////////// AFFICHAGE PAGE DE CONFIRM (SI FORMULAIRE VALIDE)
  if (formData[0].dataset.errorVisible == "false" && formData[1].dataset.errorVisible == "false" && formData[2].dataset.errorVisible == "false" && formData[3].dataset.errorVisible == "false" && formData[4].dataset.errorVisible == "false" && formData[5].dataset.errorVisible == "false" && formData[6].dataset.errorVisible == "false") {
    modalbg.style.display = "none";
    confirmPage.style.display = "flex";
  }
});
////////////////// FERMETURE PAGE DE CONFIRM
closeConfirmpage.forEach((btn) => btn.addEventListener('click', () => {
  confirmPage.style.display = "none";
  modalbg.style.display = "none";
}));

