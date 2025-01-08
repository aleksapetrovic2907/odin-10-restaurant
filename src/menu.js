const items = 
[
    ["Spaghetti YOLOgnese", "Classic spaghetti with a rich, meaty bolognese sauce that’ll have you saying “YOLO” with every bite."],
    ["Penne for Your Thoughts", "Creamy Alfredo sauce over perfectly cooked penne, topped with a sprinkle of existential bliss."],
    ["Risotto: The OG Comfort Food", "Creamy, dreamy, and perfectly seasoned. You won’t want to share, and we don’t blame you."],
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
        const item = generateItem(items[i][0], items[i][1]);
        list.appendChild(item);
    }

    return list;
}

function generateItem(title, description) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemTitle = document.createElement("h2");
    itemTitle.classList.add("menu-item-title");
    itemTitle.innerText = title;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");
    itemDescription.innerText = description;

    item.appendChild(itemTitle);
    item.appendChild(itemDescription);

    return item;
}