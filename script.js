const getFoodButton = document.querySelector(".getFood");
const recipeContainer = document.querySelector(".recipeContainer");

getFoodButton.addEventListener("click", buttonClick);

function displayIngredients(ingredientsArray) {
    var ingredientList = "";
    ingredientsArray.forEach((ingredient) => {
        console.log(ingredient);
        if (ingredient !== " - ") {
            ingredientList += `<li>${ingredient}</li>`;
        }
    });
    return ingredientList;
}

function buttonClick() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((response) => {
            meal(response.meals[0]);
        });
}

function meal(recipeJSON) {
    var recipeName = recipeJSON.strMeal;
    var recipeCategory = recipeJSON.strCategory;
    var instructions = recipeJSON.strInstructions;
    var foodType = recipeJSON.strArea;
    var foodImage = recipeJSON.strMealThumb;
    var ingredients = [];

    for (var i = 1; i < 20; i++) {
        var comboString =
            recipeJSON[`strIngredient${i}`] +
            " - " +
            recipeJSON[`strMeasure${i}`];
        ingredients.push(comboString);
    }

    const recipeInnerHTML =
        `
        <h1 class="center">${recipeName}</h1>
        <h2 class="center">Type: ${foodType}</h2>
        <img class="center" src="${foodImage}"></img>
        <h3> ${recipeCategory} </h3>` +
        displayIngredients(ingredients) +
        `<p class="lead"> ${instructions} </p>
        `;
    recipeContainer.innerHTML = recipeInnerHTML;
}
