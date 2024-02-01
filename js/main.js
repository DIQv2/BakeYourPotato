let menuIsOpen = true;
let carouselPosition = 0;

function openMenu() {
  let menu = document.getElementById("menu-base");
  if (menuIsOpen == true) {
    menuIsOpen = false;
    menu.classList.add("visible");
  } else {
    menuIsOpen = true;
    menu.classList.remove("visible");
  }
}

function changeFeautured(where) {
  let image = document.getElementById("featuredImage");
  let name = document.getElementById("featuredName");
  if (where == "r") {
    if (carouselPosition == recipeArray.length - 1) carouselPosition = 0;
    else carouselPosition++;
  } else if (where == "l") {
    if (carouselPosition == 0) carouselPosition = recipeArray.length - 1;
    else carouselPosition--;
  }
  image.src = "img/" + recipeArray[carouselPosition].image;
  image.alt = "photo of " + recipeArray[carouselPosition].name;
  name.innerHTML = recipeArray[carouselPosition].name;
}

function goToFeautured() {
  localStorage.setItem("position", carouselPosition);
  window.location.href = "recipies.html";
}
