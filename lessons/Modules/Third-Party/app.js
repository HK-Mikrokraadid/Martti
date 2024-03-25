const prompts = require("prompt-sync");
const colors = require("colors");

const prompt = prompts();

const username = prompt("Palun sisesta oma kasutajanimi: ");
const password = prompt("Palun sisesta oma parool: ");

if (username === "admin" && password === "1234") {
  console.log("Tere tulemast!");
} else {
  console.log("Vale kasutajanimi või parool!")
}
