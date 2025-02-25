let clickCounter = 0;

function startDate() {
    const button = document.getElementById("dateButton");
    // button.addEventListener('click', doSomething);
    clickCounter++;
    // how to reset textcontent to original?
    if (clickCounter < buttonChoices.length) {
        button.textContent = buttonChoices[clickCounter];
    } else {
        // Actually, I should be restarting the entire page I think
        button.textContent = "STOOOOP";
    }
}

function doSomething() {
    alert("Hello, world!")
}

const buttonChoices = [
    "Strawberry Fields",
    "Cake Outfit",
    "Girl, you are the strawberry of my eye.",
    "Pet the puppy",
    "Strawberry Dessert",
    "Thanks for the date!"
]