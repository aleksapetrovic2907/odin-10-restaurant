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

    const yolognese = generateItem(
        "Spaghetti YOLOgnese",
        "Classic spaghetti with a rich, meaty bolognese sauce that’ll have you saying “YOLO” with every bite."
    );

    const penne = generateItem(
        "Penne for Your Thoughts",
        "Creamy Alfredo sauce over perfectly cooked penne, topped with a sprinkle of existential bliss."
    );

    const risotto = generateItem(
        "Risotto: The OG Comfort Food",
        "Creamy, dreamy, and perfectly seasoned. You won’t want to share, and we don’t blame you."
    );

    list.appendChild(yolognese);
    list.appendChild(penne);
    list.appendChild(risotto);

    return list;
}

function generateItem(title, description) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemTitle = document.createElement("h2");
    itemTitle.classList.add("menu-item-title");

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");

    return item;
}