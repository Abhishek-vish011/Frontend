let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form);
  let user = this.elements[0];
  let pass = this.elements[1];

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");

  console.dir(user.value);
  console.dir(pass.value);
  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});




// form.addEventListener("submit", function(event){
//     event.preventDefault();
//    alert("form submitted!");
// });