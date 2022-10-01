function solution(priorities, location) {
  var answer = 0;
  let pri = priorities.map((v, i) => [v, i]);
  let arr = [];
  // console.log(pri)
  for (let i = 0; i < pri.length; ) {
    let tmp = pri.shift();
    if (pri.some((a) => tmp[0] < a[0])) {
      pri.push(tmp);
    } else {
      arr.push(tmp);
      if (arr[answer][1] === location) break;
      else answer++;
    }
  }
  return answer + 1;
}
