var twoSum = function(nums, target) {
  let array = []
    for(let i = 0; i < nums.length; i++){
      let result = target-nums[i];
      console.log(result);
      

      if(array[result] != undefined){
        return [i, array[result]]
      } else {
        array[nums[i]] = i
      }
    }
};

console.log(twoSum([2,7,11,15], 9));
