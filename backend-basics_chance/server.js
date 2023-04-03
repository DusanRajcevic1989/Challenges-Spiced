import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const name = chance.name({ nationality: "it" });
const age = chance.age();
const profession = chance.profession();
export const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});
