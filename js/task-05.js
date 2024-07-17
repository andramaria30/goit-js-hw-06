
let selectam_input = document.getElementById("name-input");
let selectam_span = document.getElementById("name-output");

selectam_input.addEventListener("input", function () {

    selectam_span.textContent =selectam_input.value;

})