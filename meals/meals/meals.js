const dishes = document.querySelectorAll("meal");

dishes.forEach((dish)=>{
    dish.addEventListener("click",()=>{
        window.location.href = 'mealsIngredients/biryani.html';
    })
})
