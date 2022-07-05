let pass1 = document.getElementById("pass");
let pass2 = document.getElementById("con_pas");
let form = document.querySelector("form");


pass2.addEventListener('input', (e)=>{
  if (pass2.value !== pass1.value) {
    pass2.setCustomValidity("Passwords do not match!");

  }
  else {
    pass2.setCustomValidity("");
  }
})
