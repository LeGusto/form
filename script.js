let pass1 = document.getElementById("pas");
let pass2 = document.getElementById("con_pas");
let form = document.querySelector("form");

form.addEventListener('submit', function (event) {
    if(pass1.textContent != pass2.textContent) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });