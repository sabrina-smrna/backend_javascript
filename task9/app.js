// import FruitController
const { index, store, update, destroy } = require("./FruitController.js");

// membuat fungsi main
const main = () => {
  index();
  store("Pisang");
  update("Apel");
  destroy("Apel");
};

main();
