class Solution {
  func isPalindrome(_ x: Int) -> Bool {
      var str = String(x)
      var first = str.startIndex
      var last = str.endIndex
      var reverse = str.reversed()
      var freverse = reverse.startIndex
      
      for idx in 0..<str.count {
          var s = str.index(first, offsetBy: idx)
          var r = reverse.index(freverse, offsetBy: idx)
        
          if str[s] != reverse[r] {
              return false
          }
      }
      return true
  }
}
