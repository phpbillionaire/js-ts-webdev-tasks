import header from "../components/header";
import banner from "../components/banner";
import hero from "../components/hero";
import brands from "../components/brands";
import categories from "../components/categories";

export default function homePage() {
    return `
        ${banner()}
        ${header()}
        ${hero()}
        ${brands()}
        ${categories()}
    `
}