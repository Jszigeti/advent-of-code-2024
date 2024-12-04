import * as fs from "fs";
const filePath = "./src/data/day03/input.txt";
const fileContent = fs.readFileSync(filePath, "utf-8");
console.log(fileContent);
