/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let i = 0;
  // for(let i = 0; i < candies.length; i++){

  while (i < candies.length) {
    result.push(candies[i] + extraCandies >= Math.max(...candies) ? true : false);
    i++
  }
  console.log(result);

};

kidsWithCandies([2, 3, 5, 1, 3], 3);

