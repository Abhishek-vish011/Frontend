let form = document.querySelector("form");
let user = document.querySelector("#user");

form.addEventListener("submit", function(event){
    event.preventDefault();
});

user.addEventListener("change", function(event){
    console.log("changed event");
    console.log("final value = ", user.value);
});
user.addEventListener("input", function(event){
    console.log("input event"); //only character a to z exist
    console.log("final value = ", user.value);
});