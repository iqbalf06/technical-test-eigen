const sentence = "Saya sangat senang mempelajari algoritma";

const longest = (sentence) => {
  let words = sentence.split(" ");
  let longest = { word: words[0], length: words[0].length };
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = { word: words[i], length: words[i].length };
    }
  }
  return `${longest.word}: ${longest.length} character`;
};
console.log(longest(sentence));