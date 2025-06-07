import Navigo from "navigo";

const router = new Navigo("/");
const app = document.getElementById("app");

router
  .on("/", () => {

  })
  .resolve()


router.updatePageLinks();