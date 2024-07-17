let selectam_formularul = document.querySelector(".login-form");

selectam_formularul.addEventListener("submit", function(event) {

event.preventDefault()
let get_email = document.getElementById("email").value;
console.log(get_email);
let get_password = document.getElementById("password").value;
console.log(get_password);
let selectam_reset= document.getElementById("reset");
let selectam_formularul = document.querySelector(".login-form");
console.log(selectam_formularul);


if (get_email.trim()== "" || get_password.trim() == "") {

    alert("Completeaza campurile in input")
    event.preventDefault() // opreste trimiterea formularului
    
}else {


    let elements = {

        email: get_email,
        password: get_password,
    }

    console.log(elements);
}


})


function resetForm() {





selectam_formularul.reset()
event.preventDefault()


}