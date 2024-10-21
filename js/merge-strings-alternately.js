/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  n = word1.length > word2.length ? word1.length : word2.length;
  newWord = []

  for(let i = 0; i < n; i++) {
      if (word1[i] !== undefined) {
          newWord += word1[i]
      }
      if (word2[i] !== undefined) {
          newWord += word2[i]
      }
  }

  return newWord;
};