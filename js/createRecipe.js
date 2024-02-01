function createRecipeOpen() {
    let createPage = document.getElementById("createPage-base");
    createPage.classList.add("visible");
}

function createRecipeClose() {
    let createPage = document.getElementById("createPage-base");
    createPage.classList.remove("visible");
}

function createRecipeFinish(){
    let name = document.getElementById("createRecipeName").value;
    let image = document.getElementById("createRecipeImg").files[0];
    let desc = document.getElementById("createRecipeDesc").value;
    addRecipe(name, image, desc, false);
    loadRecipes();
    createRecipeClose();
    document.getElementById("createRecipeName").value = "";
    document.getElementById("createRecipeDesc").value = "";
    image.innerHTML = "";
    desc.value = "";
    console.log("finished");
}

//Get form element -- fix submit form bug
var form=document.getElementById("createRecipeForm");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);