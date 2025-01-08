export default function generateContent() {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("home-content-container");

    const title = document.createElement("h1");
    title.innerText = "IllTaliano Ristorante"
    title.classList.add("home-title");

    const description = document.createElement("p");
    description.innerText = "The illest Italian restaurant isn’t just a place to eat; it’s a lifestyle. Our lasagna stacks higher than your life goals, and our garlic bread is toasted to a level of perfection you didn’t think existed. You’ll leave here wondering if you should legally adopt our marinara sauce as your new family heirloom. Our pizzas are so loaded they’ll make your bank account jealous, and our tiramisu will have you rethinking every bad decision you’ve ever made. We don’t just serve spaghetti; we craft edible works of art that could bring a tear to Michelangelo’s eye. The ambiance? A perfect mix of old-school Italian charm and modern swagger that says, 'Yeah, we know we’re the best.' Don’t even get us started on the wine list—it’s so good it might make you fluent in Italian by the second glass. Whether you’re here for a quick bite or to drown your sorrows in a bowl of fettuccine alfredo, we’ve got you covered. So come hungry, leave inspired, and tell your taste buds they’re about to have the meal of their lives.";
    description.classList.add("home-description");

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);

    return contentContainer;
}