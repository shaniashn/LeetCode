/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = 0;

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== val && nums[index] == val){
          let temp = nums[i];
          nums[i] = nums[index];
          nums[index] = temp;
          index++
      }

      if(nums[index] !== val) {
          index++;
      }
  };
  return index;
};