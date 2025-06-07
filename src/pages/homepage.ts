import header from "../components/header";
import banner from "../components/banner";

export default function homePage() {
    return `
        ${banner()}
        ${header()}
    `
}