import { input } from "./input";

const convertInput = (rawInput: string): number[][] => {
  return rawInput
    .trim()
    .split(/\n+/)
    .map((line) => line.trim().split(/\s+/).map(Number));
};

const solvePuzzle = (
  rawInput: string,
  fn: (line: number[]) => boolean
): number => {
  const formattedInput = convertInput(rawInput);
  return formattedInput.reduce(
    (count, line) => (fn(line) ? count + 1 : count),
    0
  );
};

// Puzzle 01
const isSafe = (line: number[]): boolean => {
  const start: number = line[0];
  const end: number = line[line.length - 1];
  let checkNumber: number = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const diff: number = line[i] - line[i + 1];
    // Increasing : diff has to be between -1 and -3
    start < end && diff > -4 && diff < 0 && checkNumber++;
    // Decreasing : diff has to be between 1 and 3
    start > end && diff < 4 && diff > 0 && checkNumber++;
  }
  // Return boolean
  return checkNumber > line.length - 2;
};
// Log the result
console.log("🚀 ~ result01:", solvePuzzle(input, isSafe));

// Puzzle 02
const isSafeWithTolerate = (line: number[]): boolean => {
  const start: number = line[0];
  const end: number = line[line.length - 1];
  let checkNumber: number = 0;
  for (let i = 0; i < line.length - 1; i++) {
    let diff: number = line[i] - line[i + 1];
    // Check if line is safe when tolerate a bad level
    if (
      (start < end && diff < -3 && diff > -1) ||
      (start > end && diff > 3 && diff < 1)
    )
      diff = line[i] - line[i + 2];
    // Increasing : diff has to be between -1 and -3
    start < end && diff > -4 && diff < 0 && checkNumber++;
    // Decreasing : diff has to be between 1 and 3
    start > end && diff < 4 && diff > 0 && checkNumber++;
  }
  // Return boolean
  return checkNumber > line.length - 2;
};
// Log the result
console.log("🚀 ~ result02:", solvePuzzle(input, isSafeWithTolerate));
