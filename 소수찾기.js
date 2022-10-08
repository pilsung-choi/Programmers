function solution(numbers) {
  const n = numbers.length;
  const set = new Set();

  for (let m = 1; m <= n; m += 1) {
    let visited = Array.from({ length: n }, () => 0);
    let temp = Array.from({ length: m }, () => 0);
    DFS(0, m, visited, temp);
  }

  function DFS(L, m, visited, temp) {
    if (L === m) {
      const number = Number(temp.join(""));
      const isPrimeNumber = isPrime(number);
      if (isPrimeNumber) set.add(number);
    } else {
      for (let i = 0; i < n; i += 1) {
        if (!visited[i]) {
          visited[i] = 1;
          temp[L] = numbers[i];
          DFS(L + 1, m, visited, temp);
          visited[i] = 0;
        }
      }
    }
  }

  return set.size;
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  let flag = true;

  for (let i = 2; i <= Math.floor(n / 2) + 1; i += 1) {
    if (!flag) return false;
    if (n % i === 0) flag = false;
  }
  return true;
}
