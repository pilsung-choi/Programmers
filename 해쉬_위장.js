function solution(clothes) {
  var answer = 1;
  let sH = new Map();
  for (let [, cloth] of clothes) {
    if (sH.has(cloth)) sH.set(cloth, sH.get(cloth) + 1);
    else sH.set(cloth, 1);
  }

  for (let x of sH.values()) {
    answer *= x + 1;
  }

  return answer - 1;
}
