const getFoodButton = document.querySelector(".getFood");
const recipeContainer = document.querySelector(".recipeContainer");

getFoodButton.addEventListener("click", buttonClick);


function displayIngredients(ingredientsArray){
    var ingredientList =""
    ingredientsArray.forEach((ingredient) => {
        ingredientList+=`<li>${ingredient}</li>`
    })
    return ingredientList
}

function buttonClick() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((response) => {
            meal(response.meals[0]);
        });
}

const meal = (recipe) => {
    var recipeName = recipe.strMeal;
    var recipeCategory = recipe.strCategory;
    var instructions = recipe.strInstructions;
    var foodType = recipe.strArea;
    var foodImage = recipe.strMealThumb;
    var ingredients = [];


    for (var i = 1; i < 20; i++) {
        var comboString = recipe[`strIngredient${i}`] + " - " + recipe[`strMeasure${i}`]
        ingredients.push(comboString);
    }



    const recipeInnerHTML = `
        <h1>${recipeName}</h1>
        <img src="${foodImage}"></img>
        <h3> ${recipeCategory} </h3>`+
        displayIngredients(ingredients)+
        `<p> ${instructions} </p>
        `;
    recipeContainer.innerHTML = recipeInnerHTML;
};
