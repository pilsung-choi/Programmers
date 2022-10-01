function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length) {
    let cnt = 0;
    progresses = progresses.map((v, i) => v + speeds[i]);
    const length = progresses.length;
    for (let i = 0; i < length; i++) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        cnt += 1;
      } else {
        break;
      }
    }
    if (cnt > 0) answer.push(cnt);
  }

  return answer;
}
