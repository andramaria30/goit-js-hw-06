

let selectam_font_size_control = document.getElementById("font-size-control");
let display_text = document.getElementById("text");

selectam_font_size_control.addEventListener("input", function () {


  let font_size = selectam_font_size_control.value + "px"

    console.log(font_size);



    selectam_font_size_control.textContent = this.value
    display_text.style.fontSize = font_size;


})