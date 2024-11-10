var removeDuplicates = function (nums) {
  let r = 0;
  let l = 0

  while(r < nums.length){
    let count = 1;
    while(nums[r] + 1 < nums.length && nums[r] == nums[r + 1]){
      count++;
      r++;
    }

    for(let j = 0; j < Math.min(2, count); j++)  {
      nums[l] = nums[r]
      l++
    }
    r++
  }

  return l;
};

console.log(removeDuplicates([1,1,1,2,2,3]));


// [ 0 ,0,1,1,1,1,2,3,3]
// [1,1,1,2,2,3]


// let j = 0;
//   let count = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i-1]) {
//       count += 1;
//     }

//     while (/* count > 2 && */ nums[i] !== nums[j]) {
//       nums[j] = nums[i];
//       j++;
//       count = 1
//     }

//     if (count <= 2) {
//       j++;
//     }
//   }
//   return nums;

// =======

// let r = 0;
//   let l = 0

//   while(r < nums.length){
//     let count = 1;
//     while(nums[r] + 1 < nums.length && nums[r] == nums[r + 1]){
//       count++;
//       r++;
//     }

//     for(let j = 0; j < Math.min(2, count); j++)  {
//       nums[l] = nums[r]
//       l++
//     }
//     r++
//   }

//   return l;


// if(count < 2){   //k > 3
//   count++;
//   k++;     // k++
// }

// if (nums[i] !== nums[k]) {
//   nums[k] = nums[i];
//   count = 0;
//   k++;    //k++
// }




    // if(nums[i] == nums[k] && count < 2){
    //   count++;
    // }

    // if(nums[i] !== nums[k] && count > 2){
    //   nums[k] = nums[i]
    //   count = 0
    // }

    // if(nums[i] ==  nums[k] && count > 2){
    //   nums[k] = nums[i];
    //   count = 0;
    //   // nums[k] = nums[i++];
    // }

    // if(nums[i] !== nums[k]) {
    //   count = 0
    // }