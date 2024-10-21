import Foundation

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var x = nums.count-1
        
        for i in 0...x {
           for j in i + 1...x {
               if nums[i] + nums[j] == target {
                return [i, j]
                }
           }
            
        }
        return [] 
    }
}
