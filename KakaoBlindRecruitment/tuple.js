// Question 
// 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다.
// n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다.

// (a1, a2, a3, ..., an)

// 튜플은 다음과 같은 성질을 가지고 있습니다.
// 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
// 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
// 튜플의 원소 개수는 유한합니다.
// 원소의 개수가 n개이고, 중복되는 원소가 없는 튜플 (a1, a2, a3, ..., an)이 주어질 때(단, a1, a2, ..., an은 자연수), 이는 다음과 같이 집합 기호 '{', '}'를 이용해 표현할 수 있습니다.

// 특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return 하도록 solution 함수를 완성해주세요.

const solution = (s) => {
  let removeBracket = s.replace("{{","{").replace("}}","").split("},").map(el => el.replace("{", ""));
  let transToNumLists = [];
  
    for (let str of removeBracket) {
    transToNumLists.push(str.split(',').map(el => Number(el)))
  }
  let sortedLists = transToNumLists.sort( (a, b) => (a.length > b.length) ? 1 : -1);
  let answer = [];
  for (let list of sortedLists) {
    for (let i = 0; i < list.length; i++) {
      if (!answer.includes(list[i])) {
        answer.push(list[i]);
      }
    }
  }
  return answer;
}