export default function generateContent() {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contact-us-content-container");

    const title = document.createElement("h1");
    title.innerText = "Contact Us – Because You're Craving the Illest";
    title.classList.add("contact-us-title");

    const description = document.createElement("p");
    description.innerText = "Reaching out to us is as effortless as twirling spaghetti on your fork. Whether you’re here to send compliments, ask us to cater your cousin's third wedding, or confess your love for our garlic bread, we’ve got you covered.";
    description.classList.add("contact-us-description");

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
    contentContainer.appendChild(generateContactData());

    return contentContainer;
}

function generateContactData() {
    const contactDataContainer = document.createElement("div");
    contactDataContainer.id = "contact-data-container";

    const location = document.createElement("div");    
    const locationTitle = document.createElement("h2");
    locationTitle.innerText = "We’re conveniently located at:"
    const locationValue = document.createElement("p");
    locationValue.innerText = "123 Pasta Lane, Saucyville, Planet Italia (Turn left at the giant meatball statue, you can’t miss it!)";
    location.appendChild(locationTitle);
    location.appendChild(locationValue);

    const phone = document.createElement("div");    
    const phoneTitle = document.createElement("h2");
    phoneTitle.innerText = "Got a question? Need reservations? Want to hear a random pizza fact? Call us at:"
    const phoneValue = document.createElement("p");
    phoneValue.innerText = "1-800-ILL-TALY (Available 24/7 unless we're on our pizza break).";
    phone.appendChild(phoneTitle);
    phone.appendChild(phoneValue);

    const hours = document.createElement("div");    
    const hoursTitle = document.createElement("h2");
    hoursTitle.innerText = "We’re open when you’re hungry and close when we’ve run out of sauce. But officially:";
    const hoursValue = document.createElement("p");
    hoursValue.innerText = "Monday to Saturday: 11 AM – 11 PM";
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursValue);

    contactDataContainer.appendChild(location);
    contactDataContainer.appendChild(phone);
    contactDataContainer.appendChild(hours);

    return contactDataContainer;
}