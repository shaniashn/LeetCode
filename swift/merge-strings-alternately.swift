class Solution {
    func mergeAlternately(_ word1: String, _ word2: String) -> String {
        var result = ""

        for (ch1, ch2) in zip(word1, word2){
            result += [ch1, ch2]
        }

        if word1.count < word2.count {
            result += word2[word1.endIndex...]
        }
        else {
            result += word1[word2.endIndex...]
        }

        return result
    }
}
