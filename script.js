let clickCounter = 0;

function startDate() {
    const button = document.getElementById("dateButton");
    // button.addEventListener('click', doSomething);
    clickCounter++;
    button.textContent = buttonMessages[clickCounter];
}

function doSomething() {
    alert("Hello, world!")
}

const buttonMessages = [
    "Strawberry Fields",
    "Cake Outfit",
    "Girl, you are the strawberry of my eye.",
    "Pet the puppy",
    "Strawberry Dessert"
]