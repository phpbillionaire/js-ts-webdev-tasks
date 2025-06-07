import Navigo from "navigo";

const router = new Navigo("/");

router
  .on("/", () => {
    document.body.textContent = "Home";
  })
  .on("/hello", () => {
    document.body.textContent = "hello"
  })
  .resolve()


router.updatePageLinks();