class Recipe {
  constructor(name, image, description, isLocal) {
    this.name = name;
    this.image = image;
    this.desc = description;
    this.isLocal = isLocal;
  }
}

let recipeArray = [];
function addRecipe(name, image, description, isLocal) {
  const recipe = new Recipe(name, image, description, isLocal);
  recipeArray.push(recipe);
}

//create as many recipies as you want; syntax = addRecipe("recipeName", "recipeImage", "recipeDescription", true)
addRecipe(
  "Roasted Potatoes",
  "roastedPotatoes.jpg",
  "Potatoes roasted to perfection with olive oil and herbs.<br><br>Ingredients:<br>Potatoes<br>Olive oil<br>Herbs (rosemary, thyme)<br>Salt and pepper<br><br>Preparation: Toss potatoes in oil, herbs, salt, and pepper. Roast until golden brown.<br><br>",
  true
);

addRecipe(
  "French Fries",
  "frenchFries.jpg",
  "Classic crispy fries with a golden exterior.<br><br>Ingredients:<br>Potatoes<br>Vegetable oil<br>Salt<br><br>Preparation: Cut potatoes into fries, fry until golden, and season with salt.<br><br>",
  true
);

addRecipe(
  "Potato Salad",
  "potatoSalad.jpg",
  "Cold salad with boiled potatoes, mayo, mustard, and vegetables.<br><br>Ingredients:<br>Potatoes<br>Mayonnaise<br>Mustard<br>Celery, onions<br><br>Preparation: Boil potatoes, mix with mayo, mustard, celery, and onions. Chill before serving.<br><br>",
  true
);

addRecipe(
  "Scalloped Potatoes",
  "scallopedPotatoes.jpg",
  "Sliced potatoes baked with cream, cheese, and seasoning.<br><br>Ingredients:<br>Potatoes<br>Heavy cream<br>Cheese<br>Salt and pepper<br><br>Preparation: Layer sliced potatoes with cream, cheese, and seasoning. Bake until bubbly.<br><br>",
  true
);

addRecipe(
  "Hasselback Potatoes",
  "hasselbackPotatoes.jpg",
  "Potatoes thinly sliced and roasted with butter and herbs.<br><br>Ingredients:<br>Potatoes<br>Butter<br>Herbs (rosemary, thyme)<br>Salt and pepper<br><br>Preparation: Slice potatoes thinly without cutting through. Brush with butter, herbs, salt, and pepper. Roast until crispy.<br><br>",
  true
);

addRecipe(
  "Potato Leek Soup",
  "potatoLeekSoup.jpg",
  "Creamy soup with potatoes, leeks, and broth.<br><br>Ingredients:<br>Potatoes<br>Leeks<br>Chicken broth<br>Cream<br><br>Preparation: Sauté leeks, add potatoes and broth. Simmer, blend, and finish with cream.<br><br>",
  true
);

addRecipe(
  "Gnocchi",
  "Gnocchi.jpg",
  "Soft potato dumplings served with various sauces.<br><br>Ingredients:<br>Potatoes<br>Flour<br>Egg<br>Salt<br><br>Preparation: Mash potatoes, mix with flour, egg, and salt. Roll into ropes, cut, and boil. Serve with desired sauce.<br><br>",
  true
);

addRecipe(
  "Potato Pancakes",
  "potatoPancakes.jpg",
  "Grated potatoes mixed with flour and fried until golden.<br><br>Ingredients:<br>Potatoes<br>Flour<br>Egg<br>Salt<br><br>Preparation: Grate potatoes, mix with flour, egg, and salt. Fry until golden brown.<br><br>",
  true
);

addRecipe(
  "Sweet Potato Casserole",
  "sweetPotatoCasserole.jpg",
  "Baked sweet potatoes with a crunchy pecan topping.<br><br>Ingredients:<br>Sweet potatoes<br>Brown sugar<br>Pecans<br>Butter<br><br>Preparation: Mash sweet potatoes, mix with sugar. Top with pecans and butter, then bake.<br><br>",
  true
);

addRecipe(
  "Potato Skins",
  "potatoSkins.jpg",
  "Baked potato skins filled with cheese, bacon, and sour cream.<br><br>Ingredients:<br>Potatoes<br>Cheese<br>Bacon<br>Sour cream<br><br>Preparation: Bake potatoes, scoop out the flesh, fill skins with cheese and bacon. Bake until cheese melts. Top with sour cream.<br><br>",
  true
);

addRecipe(
  "Potato and Chorizo Tacos",
  "potatoAndChorizoTacos.jpg",
  "Tacos filled with spiced potatoes and chorizo.<br><br>Ingredients:<br>Potatoes<br>Chorizo<br>Tortillas<br>Cilantro, onions<br><br>Preparation: Sauté potatoes and chorizo. Fill tortillas and garnish with cilantro and onions.<br><br>",
  true
);

addRecipe(
  "Potato Goulash",
  "potatoGoulash.jpg",
  "Stew with potatoes, beef, and paprika.<br><br>Ingredients:<br>Potatoes<br>Beef<br>Onions<br>Paprika<br><br>Preparation: Brown beef, add potatoes, onions, and paprika. Simmer until potatoes are tender.<br><br>",
  true
);

addRecipe(
  "Potato Curry",
  "potatoCurry.jpg",
  "Spicy curry with potatoes, tomatoes, and Indian spices.<br><br>Ingredients:<br>Potatoes<br>Tomatoes<br>Curry spices (cumin, coriander, turmeric)<br>Coconut milk<br><br>Preparation: Sauté potatoes, add tomatoes and spices. Simmer with coconut milk until potatoes are cooked.<br><br>",
  true
);

addRecipe(
  "Potato Croquettes",
  "potatoCroquettes.jpg",
  "Deep-fried mashed potato balls with a crispy coating.<br><br>Ingredients:<br>Mashed potatoes<br>Bread crumbs<br>Egg<br>Parsley<br><br>Preparation: Shape mashed potatoes into balls, coat in egg and breadcrumbs. Fry until golden.<br><br>",
  true
);

addRecipe(
  "Loaded Baked Potatoes",
  "loadedBakedPotatoes.jpg",
  "Baked potatoes topped with cheese, bacon, and sour cream.<br><br>Ingredients:<br>Potatoes<br>Cheese<br>Bacon<br>Sour cream<br><br>Preparation: Bake potatoes, top with cheese and bacon. Serve with a dollop of sour cream.<br><br>",
  true
);

addRecipe(
  "Potato and Spinach Gratin",
  "potatoAndSpinachGratin.jpg",
  "Baked dish with layers of potatoes, spinach, and cheese.<br><br>Ingredients:<br>Potatoes<br>Spinach<br>Cheese<br>Cream<br><br>Preparation: Layer sliced potatoes with spinach, cheese, and cream. Bake until bubbly and golden.<br><br>",
  true
);

addRecipe(
  "Potato Latkes",
  "potatoLatkes.jpg",
  "Crispy fried pancakes made with shredded potatoes and onions.<br><br>Ingredients:<br>Potatoes<br>Onions<br>Flour<br>Egg<br><br>Preparation: Shred potatoes and onions, mix with flour and egg. Fry until golden brown.<br><br>",
  true
);

addRecipe(
  "Potato and Sausage Casserole",
  "potatoAndSausageCasserole.jpg",
  "Baked casserole with potatoes, sausages, and vegetables.<br><br>Ingredients:<br>Potatoes<br>Sausages<br>Bell peppers<br>Onions<br><br>Preparation: Layer sliced potatoes with sausages, bell peppers, and onions. Bake until potatoes are tender.<br><br>",
  true
);

addRecipe(
  "Potato and Bacon Chowder",
  "potatoAndBaconChowder.jpg",
  "Hearty soup with potatoes, bacon, and vegetables.<br><br>Ingredients:<br>Potatoes<br>Bacon<br>Carrots<br>Corn<br><br>Preparation: Cook bacon, add potatoes, carrots, and corn. Simmer until potatoes are cooked.<br><br>",
  true
);

addRecipe(
  "Mashed Potatoes",
  "mashedPotatoes.jpg",
  "Creamy mashed potatoes made with butter, milk, and seasoning.<br><br>Ingredients:<br>Potatoes<br>Butter<br>Milk<br>Salt and pepper<br><br>Preparation: Boil, mash, and mix with butter and milk. Season to taste.<br><br>",
  true
);


//------------------------------------------------------------------------------------

function setDefaultCarousel() {
  document.getElementById("featuredImage").src = "img/" + recipeArray[0].image;
  document.getElementById("featuredImage").alt =
    "photo of " + recipeArray[0].name;
  document.getElementById("featuredName").innerHTML = recipeArray[0].name;
}

function loadRecipes() {
  let page = document.getElementById("recipesPage");
  removeAllChildNodes(page);
  for (let i = 0; i < recipeArray.length; i++) {
    let div = document.createElement("div");
    div.classList.add("individualRecipe");
    div.appendChild(createTitle(i));
    div.appendChild(createImage(i));
    div.appendChild(createDesc(i));
    page.appendChild(div);
  }
  page.classList.add("veryTall");
  scrollToElementAndMoveUp();
  setTimeout(() => {
    page.classList.remove("veryTall");
  }, 100);
}

function createImage(i) {
  let img = document.createElement("img");
  if (recipeArray[i].isLocal) {
    img.src = "img/" + recipeArray[i].image;
  } else img.src = URL.createObjectURL(recipeArray[i].image);
  img.alt = "photo of " + recipeArray[i].name;
  img.classList.add("recipeImage");
  return img;
}

function createTitle(i) {
  let title = document.createElement("h2");
  title.innerHTML = recipeArray[i].name;
  title.classList.add("recipeTitle");
  title.setAttribute("id", "recipe" + i);
  return title;
}

function createDesc(i) {
  let desc = document.createElement("p");
  desc.innerHTML = recipeArray[i].desc;
  desc.classList.add("recipeDesc");
  return desc;
}

function scrollToElementAndMoveUp() {
  let scrollPosition = localStorage.getItem("position");
  let findId = "recipe" + scrollPosition;
  let targetElement = document.getElementById(findId);
  localStorage.removeItem("position");
  if (targetElement) {
    location.href = "#" + findId;
    window.scrollBy(0, -window.innerHeight * 0.2);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
