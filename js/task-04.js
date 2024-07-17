

let counterValue = 0;

let increment_value = document.getElementById("increment-value");

function updatedisplay () {

  let selectam_span = document.getElementById("value");

  selectam_span.textContent = counterValue


}

increment_value.addEventListener("click", ()=> 
{

  counterValue ++
  updatedisplay()



})


let decrement_value = document.getElementById("decrement-value");

decrement_value.addEventListener("click", ()=> 
  {
  
      counterValue --
      updatedisplay()
  
  
  
  })