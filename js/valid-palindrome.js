var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let ans = new Set();

    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) !== str.charAt(str.length-1-i)){
        ans.add(false);
      }
    }
    return ans.has(false) ? false : true;
};