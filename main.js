const content = document.querySelector(".products__inner");
const categoryList = document.createElement("ul");
const products = document.createElement("div");
products.classList.add("products")
categoryList.classList.add("category__list");
const navigation = [
    "Jackets & Coats",
    "Hoodies",
    "Shirts",
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    "Underwear",
    "Gift Sets"
];

navigation.forEach(function (category) {
    const categoryListItem = document.createElement("li");
    categoryListItem.classList.add("category__list-item");
    categoryListItem.textContent = category
    categoryList.append(categoryListItem)
});


function listenCategoryClick() {
    const categories = document.querySelectorAll(".category__list-item");

    categories.forEach(function (category) {
        category.addEventListener("click", function () {
            categories.forEach(function (category) {
                category.classList.remove("category-active")
            })

            category.classList.add("category-active")
        })
    });
}

const header = document.createElement("header");
const headerItemAmount = document.createElement("div");
const headerSort = document.createElement("div");
header.classList.add("header");
headerItemAmount.classList.add("header__amount");
headerItemAmount.textContent = "6 items";
headerSort.classList.add("header__sort");

headerSort.innerHTML = "Sort by <span>Recommended ▼</span>"
header.append(headerItemAmount, headerSort)

let cardsInfo = [
    {
        "imagePath": "./assets/img/1.png",
        "title": "Slub jersey T-shirt",
        "price": 12.99,
        "currency": "$"
    },
    {
        "imagePath": "./assets/img/2.png",
        "title": "Printed T-shirt",
        "price": 12.99,
        "currency": "$"
    },
    {
        "imagePath": "./assets/img/3.png",
        "title": "Cotton T-shirt",
        "price": 12.99,
        "currency": "$"
    },
    {
        "imagePath": "./assets/img/4.png",
        "title": "T-shirt with a motif",
        "price": 12.99,
        "currency": "$"
    }, {
        "imagePath": "./assets/img/5.png",
        "title": "Cotton T-shirt Regular Fit",
        "price": 12.99,
        "currency": "$"
    },
    {
        "imagePath": "./assets/img/6.png",
        "title": "Slub jersey T-shirt",
        "price": 12.99,
        "currency": "$"
    }
];


const cardsList = document.createElement("div");
cardsList.classList.add("cards__list");

cardsInfo.forEach(function (card) {
    const cardItem = `
            <div class="card">
                <img src="${card.imagePath}" class="card__image">
                <div class="card__title">${card.title}</div>
                <div class="card__price">${card.currency} ${card.price}</div>
                <div class="card__button">Add to bag</div>
            </div>
    `;

    cardsList.insertAdjacentHTML("beforeend", cardItem)
});
products.append(header, cardsList)

content.append(categoryList, products)
listenCategoryClick()