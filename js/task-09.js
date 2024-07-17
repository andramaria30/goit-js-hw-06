




let selectam_btn = document.getElementById("btnn");
console.log(selectam_btn);



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }




 
selectam_btn.addEventListener("click", function () {

let color = getRandomHexColor()

document.body.style.backgroundColor = color;

    
})