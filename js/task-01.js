

let categories = document.getElementById("categories");

let number_categories =categories.querySelectorAll("h2").length;
console.log("Number of categories: "+ number_categories);


let title_all_categories =categories.querySelectorAll("h2");

let number_elements_of_ul = categories.querySelectorAll("ul");

for (let i=0; i<title_all_categories.length; i++) {

    // afisam continutul elementului h2
    
        console.log("Category: " + title_all_categories[i].textContent)
    
    
    // selectam toate li urile din ul
    
       
    
        let num =  number_elements_of_ul[i].querySelectorAll("li").length;
    
        console.log("Elements :" + num);
    
    }