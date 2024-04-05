class Solution {
    func romanToInt(_ s: String) -> Int {
    var acuan : [Character:Int] = ["I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000]
    var sum = 0
    var prev = 0
    
    for i in s {
        var isi = acuan[i] ?? 0
        sum += (isi <= prev) ? prev : -prev
        prev = isi
    }
    sum += prev
    print(sum)
    return sum
    }
}
