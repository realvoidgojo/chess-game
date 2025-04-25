const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

for (let j = verticalAxis.length - 1; j >= 0; j--) {
  for (let i = 0; i < horizontalAxis.length; i++) {
    const number = i + j + 2;
    if (number % 2 === 0) {
      console.log("even ", i, j);
    } else {
      console.log("odd ", i, j);
    }
  }
}
