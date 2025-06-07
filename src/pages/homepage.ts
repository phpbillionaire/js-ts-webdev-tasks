import header from "../components/header";
import banner from "../components/banner";
import hero from "../components/hero";

export default function homePage() {
    return `
        ${banner()}
        ${header()}
        ${hero()}
    `
}