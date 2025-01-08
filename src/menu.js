const items = 
[
    ["Spaghetti YOLOgnese", "Classic spaghetti with a rich, meaty bolognese sauce that’ll have you saying “YOLO” with every bite.", 25],
    ["Penne for Your Thoughts", "Creamy Alfredo sauce over perfectly cooked penne, topped with a sprinkle of existential bliss.", 35],
    ["Risotto: The OG Comfort Food", "Creamy, dreamy, and perfectly seasoned. You won’t want to share, and we don’t blame you.", 30],
    ["Lasagna Like It’s Hot", "Layers of pasta, cheese, and sauce so good, it’s got more levels than your favorite video game.", 32],
    ["Fettuccine Divalicious", "Smooth, buttery noodles paired with a lemony chicken that sings louder than an Italian opera.", 45],
    ["Garlic Bread Addiction", "Crispy on the outside, fluffy on the inside, and packed with enough garlic to ward off vampires for life.", 10],
    ["Tiramisu You Already", "Layers of coffee-soaked ladyfingers and mascarpone cream. It’s dessert, but it’s also a love letter.", 8],
];

export default function generateContent() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const title = document.createElement("h1");
    title.classList.add("menu-title");
    title.innerText = "The Menu";

    menuContainer.appendChild(title);
    menuContainer.appendChild(generateItemsList());

    return menuContainer;
}

function generateItemsList() {
    const list = document.createElement("div");
    list.classList.add("menu-items");

    for (let i = 0; i < items.length; i++) {
        const item = generateItem(items[i][0], items[i][1], items[i][2]);
        list.appendChild(item);
    }

    return list;
}

function generateItem(title, description, cost) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemTitle = document.createElement("h2");
    itemTitle.classList.add("menu-item-title");
    itemTitle.innerText = `${title} ($${cost})`;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");
    itemDescription.innerText = description;

    item.appendChild(itemTitle);
    item.appendChild(itemDescription);

    return item;
}