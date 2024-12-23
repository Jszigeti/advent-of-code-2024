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
  const startLevel: number = line[0];
  const endLevel: number = line[line.length - 1];
  let checkNumber: number = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const diff: number = line[i] - line[i + 1];
    // If increasing, diff has to be between -1 and -3
    startLevel < endLevel && diff > -4 && diff < 0 && checkNumber++;
    // If decreasing, diff has to be between 1 and 3
    startLevel > endLevel && diff < 4 && diff > 0 && checkNumber++;
  }
  // Return boolean
  return checkNumber > line.length - 2;
};
// Log result
console.log("🚀 ~ result01:", solvePuzzle(input, isSafe));

// Puzzle 02
const isSafeWithTolerate = (line: number[]): boolean => {
  // Check if line is safe without tolerate a single bad level
  const result = isSafe(line);
  // Check if line is safe with tolerate a single bad level
  if (!result) {
    for (let i = 0; i < line.length; i++) {
      const modifiedLine = [...line.slice(0, i), ...line.slice(i + 1)];
      if (isSafe(modifiedLine)) {
        return true;
      }
    }
  }
  return result;
};
// Log result
console.log("🚀 ~ result02:", solvePuzzle(input, isSafeWithTolerate));
