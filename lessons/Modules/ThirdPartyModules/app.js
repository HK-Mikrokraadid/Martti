const prompt = require("prompt-sync");
const colors = require("colors");
const todoService = require("./todoService");

const pr = prompt();

while (true) {
  console.log("1 - List, 2 - Lisa, 3 - Muuda olekut, 4 - Kustuta, 5 - Lõpeta");
  const choice = pr("Vali tegevus: ");

  if (choice === "1") {
    console.log(todoService.getTodos());
  } else if (choice === "2") {
    const title = pr("Sisesta tegevuse nimetus: ");
    const result = todoService.addTodo(title);
    if (result) {
      console.log("Tegevuse lisamine õnnestus".green);
    }
  } else if (choice === "3") {
    console.log(todoService.getTodos());
    const id = pr("Sisesta tegevuse id: ");
    const result = todoService.toggleTodo(Number(id));
    if (result) {
      console.log("Tegevus edukalt muudetud".green);
    }
  } else if (choice === "5") {
    console.log("Lõpetan ...");
    break;
  }
}
