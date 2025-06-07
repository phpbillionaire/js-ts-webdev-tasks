import Navigo from "navigo";
import homePage from "./pages/homepage";

const router = new Navigo("/");
const app = document.getElementById("app");

router
  .on("/", () => {
    app.innerHTML = homePage()
  })
  .resolve()


router.updatePageLinks();