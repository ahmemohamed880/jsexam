const openNavButton = document.getElementById('open-nav');
const sideNav = document.getElementById('side-nav');

openNavButton.addEventListener('click', () => {
    sideNav.classList.toggle('open');
    openNavButton.classList.toggle('shifted');
});

async function searchby (meal){
    let response= await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    response=await response.json()
    console.log(response.meals);
    display(response.meals)
}
searchby("")


function display(array){
    var cartona=" "
    for(var i=0 ; i<array.length ; i++){
        cartona+=`<div class="col-md-3">
        <div class="meal position-relative overflow-hidden rounded-4">
          <img src="${array[i].strMealThumb}" alt="" class="w-100">
          <div class="meallayer position-absolute d-flex align-items-center p-3">
            <h3>${array[i].strMeal}</h3>
          </div>
        </div>
      </div>`
    }
    document.getElementById("data").innerHTML=cartona
    
}

 async function category(){
    let response= await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response=await response.json()
    categorydisplay(response.categories)
}

function categorydisplay(arr) {
    var cartona = " ";
    for (var i = 0; i < arr.length; i++) {
        cartona += `<div class="col-md-3 pointer">
        <div class="meal position-relative overflow-hidden rounded-4 " onclick="filtercategory('${arr[i].strCategory}')">
          <img src="${arr[i].strCategoryThumb}" alt="" class="w-100">
          <div class="meallayer position-absolute d-flex align-items-center p-3">
            <h3>${arr[i].strCategory}</h3>
            <p>${arr[i].strCategoryDescription}</p>
          </div>
        </div>
      </div>`;
    }
    document.getElementById("data").innerHTML = cartona;
}


async function area(){
    let response= await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response=await response.json()
    console.log(response.meals);
    areadisplay(response.meals)
}

function areadisplay(arr){
    var cartona=" "
    for(var i=0 ; i<arr.length ; i++){
        cartona+=`<div class="col-md-3">
        <div class="rounded-4 pointer" onclick="filterarea('${arr[i].strArea}')">
         
          <i class="fa-solid fa-city fa-3x"></i>
            <h3>${arr[i].strArea}</h3>
          </div>
       
      </div>`
    }
    document.getElementById("data").innerHTML=cartona

}

async function ingredients(){
    let response= await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response=await response.json()
    console.log(response.meals);
    ingredientsdisplay(response.meals.slice(0,20))
}

function ingredientsdisplay(arr){
    var cartona=" "
    for(var i=0 ; i<arr.length ; i++){
        cartona+=`<div class="col-md-3">
        <div class="rounded-4 pointer " onclick="filteringredients('${arr[i].strIngredient}')" >
         
        <i class="fa-solid fa-wheat-awn-circle-exclamation fa-3x "></i>
            <h3>${arr[i].strIngredient}</h3>
            <p>${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
          </div>
       
      </div>`
    }
    document.getElementById("data").innerHTML=cartona

}

async function filtercategory (category){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response=await response.json()
    console.log(response);
    display(response.meals)
}
async function filterarea (area){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response=await response.json()
    console.log(response);
    display(response.meals)
}
async function filteringredients (ingredients){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ingredients}`)
    response=await response.json()
    console.log(response);
    display(response.meals)
}



async function searchbyName(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    response = await response.json();
    console.log(response.meals);
    display(response.meals);
}

async function searchbyFirstLetter(letter) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    response = await response.json();
    console.log(response.meals);
    display(response.meals);
}

