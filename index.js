
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/nirvana.jpg", rating: 5, comment: "Rich broth!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "images/gyukotsu.jpg", rating: 4.5, comment: "Spicy!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Ichiran", image: "images/kojiro.jpg", rating: 4.8, comment: "Sina maoni!" },

];


function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;

       
        img.addEventListener("click", () => handleClick(ramen));

        ramenMenu.appendChild(img);
    });
}


function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating ?? "N/A";
    document.getElementById("ramen-comment").textContent = ramen.comment ?? "No comment available";
}


document.getElementById("add-ramen-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const newRamen = {
        id: ramens.length + 1,
        name: document.getElementById("name").value,
        restaurant: document.getElementById("restaurant").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
        comment: document.getElementById("comment").value
    };

    ramens.push(newRamen);
    displayRamens();

    this.reset();
});

window.onload = displayRamens;
