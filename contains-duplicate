class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        var setNums: Set<Int> = []
    
    for i in 0..<nums.count {
        if setNums.contains(nums[i]) {
            return true
        }  
        setNums.insert(nums[i])
    }
        return false
    }
}
