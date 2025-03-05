let clickCounter = -1;

function startDate() {
    const button = document.getElementById("dateButton");
    const message = document.getElementById("dateMessage");
    const image = document.getElementById("mainImage");
    // button.addEventListener('click', doSomething);
    clickCounter++;
    if (clickCounter < buttonChoices.length) {
        button.textContent = buttonChoices[clickCounter];
        message.textContent = dateMessages[clickCounter]
        image.src=dateImages[clickCounter]
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
    "🍓 PLAY AGAIN 🍓"
]

const dateMessages = [
    "Where are you taking Miss Shortcake?",
    "What are you wearing?",
    "Drop your best pickup line",
    "There's a puppy, what do you do?",
    "Time to wrap it up, what are you going to eat?",
    "Miss Shortcake loved her date with you! Thanks for playing <3",
]

const dateImages = [
    "https://media.giphy.com/media/3oz8xWxVOhxLMso3vO/giphy.gif?cid=790b7611x8052av7q7uepqdxc0ugi4wtwhpqyp73ltbrbqvp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/ZKcCTucRwOIz6/giphy.gif?cid=790b7611x8052av7q7uepqdxc0ugi4wtwhpqyp73ltbrbqvp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/Z2P9X3Upuw0ZexxDOr/giphy.gif?cid=790b7611x8052av7q7uepqdxc0ugi4wtwhpqyp73ltbrbqvp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/HQpDAiBdJM3bE4kOes/giphy.gif?cid=ecf05e47j0szduw1oanj03mrz3mug7c2m4netomkmfcx1th4&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/B6Rtjz90dG97enfVbW/giphy.gif?cid=790b7611x8052av7q7uepqdxc0ugi4wtwhpqyp73ltbrbqvp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/aJb3WkzdjwTbNZ57BC/giphy.gif?cid=790b7611x8052av7q7uepqdxc0ugi4wtwhpqyp73ltbrbqvp&ep=v1_gifs_search&rid=giphy.gif&ct=g"
]