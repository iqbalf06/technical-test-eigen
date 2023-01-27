const reverseWord = (word) => {
  let reversedWord = word.slice(0, -1).split("").reverse().join("");
  return reversedWord + word[word.length - 1];
};
console.log(reverseWord("NEGIE1"));