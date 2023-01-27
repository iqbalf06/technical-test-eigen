const INPUT = ["vc", "jb", "jkt", "jb"];
const QUERY = ["jkt", "bdg", "jb"];

const countWords = (input, query) => {
  let result = [];
  for (let i = 0; i < query.length; i++) {
    result.push(input.filter((x) => x === query[i]).length);
  }
  return result;
};
console.log(countWords(INPUT, QUERY));