const getFoodButton = document.querySelector(".getFood");
const recipeContainer = document.querySelector(".recipeContainer");

getFoodButton.addEventListener("click", buttonClick);

function buttonClick() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((response) => {
            meal(response.meals[0]);
        });
}

const meal = (recipe) => {
    const recipeInnerHTML = `${recipe.strMeal}`;
    recipeContainer.innerHTML = recipeInnerHTML;
};
