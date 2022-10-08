function solution(brown, yellow) {
  let sum = brown / 2 + 2; // 가로, 세로의 합

  for (let i = sum - 1; i >= sum / 2; i--) {
    let row = i;
    let column = sum - i;
    if (yellow === (row - 2) * (column - 2)) return [row, column];
  }
}
