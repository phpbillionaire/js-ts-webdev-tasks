export default function header() {
    return `
    <nav class="header">
        <div class="container">
        <div class="header__inner">
            <a class="header__logo" href="/" data-navigo>SHOP.CO</a>
            <div class="header__controls">
            <a class="header__controls-item" href="/cart" data-navigo>
                <img class="header__controls-image" src="/assets/img/icons/cart.svg" alt="">
            </a>
            <a class="header__controls-item" href="#">
                <img class="header__controls-image" src="/assets/img/icons/account.svg" alt="">
            </a>
            </div>
        </div>
        </div>
    </nav>
    `
}