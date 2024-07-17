
let selectez_validation_input = document.getElementById("validation-input");

let data_length = selectez_validation_input.getAttribute("data-length");
console.log(data_length);

selectez_validation_input.addEventListener("blur" , function () {

    let lungime_input = selectez_validation_input.value.length;

    if (lungime_input == data_length) {

        selectez_validation_input.classList.add("valid")
        selectez_validation_input.classList.remove("invalid")

        console.log("Lungimea textului = lungimea valida")
    }else if (lungime_input < data_length) {

        selectez_validation_input.classList.add("invalid")
        selectez_validation_input.classList.remove("valid")

      

        console.log("Lungimea textului = lungimea invalida");
        
    }

   
})