let clickCounter = 0;

function startDate() {
    const button = document.getElementById("dateButton");
    const message = document.getElementById("dateMessage");
    // button.addEventListener('click', doSomething);
    clickCounter++;
    if (clickCounter < buttonChoices.length) {
        button.textContent = buttonChoices[clickCounter];
        message.textContent = dateMessages[clickCounter]
    } else {
        location.reload();
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
    "Thanks for the date!",
    "🍓 PLAY AGAIN 🍓"
]

const dateMessages = [
    "Where are you taking Miss Shortcake?",
    "What are you wearing?",
    "Drop your best pickup line",
    "There's a puppy, what do you do?",
    "Time to wrap it up, what are you going to eat?",
    "Miss Shortcake loved her date with you!"
]