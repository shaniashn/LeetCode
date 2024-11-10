var removeDuplicates = function (nums) {
  let j = 0;
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) {
      count += 1; 
    } else if (nums[i] !== nums[i-1]){
      count = 1
    }

    if(count <= 2){
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};