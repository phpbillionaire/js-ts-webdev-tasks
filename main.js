const container = document.querySelector(".container");

function createCard(title = null, text = null, titleColor = null, textColor = null, buttonBackgroundColor = null, buttonTextColor = null, backgroundImagePath = null, backgroundColor = null, border = false) {
    const card = document.createElement("div");
    const cardInner = document.createElement("div");
    const cardInnerTitle = document.createElement("h4");
    const cardInnerText = document.createElement("p");
    const cardInnerButton = document.createElement("a");

    card.classList.add("latest__card");
    cardInner.classList.add("latest__card__inner");
    cardInnerTitle.classList.add("latest__card-title");
    cardInnerText.classList.add("latest__card-text");
    cardInnerButton.classList.add("latest__card-button");

    if (titleColor) {
        cardInnerTitle.style.color = titleColor
    }

    if (textColor) {
        cardInnerText.style.color = textColor
    }

    if (buttonBackgroundColor) {
        cardInnerButton.style.backgroundColor = buttonBackgroundColor
    }

    if (buttonTextColor) {
        cardInnerButton.style.color = buttonTextColor
    }

    if (backgroundColor) {
        card.style.backgroundColor = backgroundColor
    }
    if (backgroundImagePath) {
        card.style.backgroundImage = `url("${backgroundImagePath}")`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
    }
    if (!border) {
        card.style.border = "none";
    }
    cardInnerTitle.textContent = title ? title : "Test";
    cardInnerText.textContent = text ? text : "Test";
    cardInnerButton.textContent = "Explore";
    card.appendChild(cardInner);
    cardInner.append(cardInnerTitle, cardInnerText, cardInnerButton);

    return card;
}

function initCards() {
    const cards = document.createElement("div");
    cards.classList.add("latest__cards-list");

    const cardOne = createCard(
        "Startup Framework",
        "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
        "#1E0E62",
        "#1E0E62",
        "#FFF",
        "#1E0E62",
        null,
        "#EBEAED",

    );
    const cardTwo = createCard(
        "Web Generator",
        "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
        "#1E0E62",
        "#15143966",
        "#25DAC5",
        "#FFF",
        null,
        "#FFF",
        "#EBEAED"

    );
    const cardThree = createCard(
        "Slides 4",
        "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
        "#FFF",
        "#FFF",
        "#FFF",
        "#1E0E62",
        null,
        "#482BE7",

    );
    const cardFour = createCard(
        "Postcards",
        "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
        "#FFF",
        "#FFF",
        "#FFF",
        "#1E0E62",
        "./assets/img/Image.png",
        "#EBEAED",

    );

    cards.append(cardOne, cardTwo, cardThree, cardFour)
    return cards
}

function initHeader() {
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    const headerButton = document.createElement("div");

    header.classList.add("header");
    headerTitle.classList.add("header__title");
    headerButton.classList.add("header__explore");

    headerTitle.textContent = "Last works"
    headerButton.textContent = "Explore Showcase";

    header.append(headerTitle, headerButton);
    return header;
}

container.append(initHeader(), initCards());
