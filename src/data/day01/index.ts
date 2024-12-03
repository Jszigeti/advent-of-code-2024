import { input } from "./input";

// Initialize arrays
const leftList: number[] = [];
const rightList: number[] = [];
const results: number[] = [];

// Split input to arrays and convert
input
  .trim()
  .split(/\n+/)
  .forEach((line) => {
    const [leftValue, rightValue] = line.trim().split(/\s+/);
    leftList.push(parseInt(leftValue));
    rightList.push(parseInt(rightValue));
  });

// Puzzle 01
const calculateTotalDistanceBetweenLists = (
  arr1: number[],
  arr2: number[]
): number => {
  // Sort arrays
  arr1.sort();
  arr2.sort();
  // Calculate distance between in each line
  for (const id in arr1) {
    const dist = Math.abs(arr1[id] - arr2[id]);
    results.push(dist);
  }
  // Return the total distance
  return results.reduce((acc, curr) => acc + curr, 0);
};
// Log result
console.log(
  "🚀 ~ result01:",
  calculateTotalDistanceBetweenLists(leftList, rightList)
);

// Puzzle 02
const calculateSimilarityScore = (arr1: number[], arr2: number[]): number => {
  // Calculate similarity between in each line
  for (const id in arr1) {
    const similarity = Math.abs(
      arr1[id] * arr2.filter((i) => i === arr1[id]).length
    );
    results.push(similarity);
  }
  // Return total similarity score
  return results.reduce((acc, curr) => acc + curr, 0);
};
// Log result
console.log("🚀 ~ result02:", calculateSimilarityScore(leftList, rightList));
