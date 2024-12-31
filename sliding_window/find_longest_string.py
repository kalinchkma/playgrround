#  You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"

def find_longest_string(s: str):
    left = curr = ans = 0
    for right in range(len(s)):
        if s[right] == "0":
            curr += 1
        
        while curr > 1:
            if s[left] == "0":
                curr -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans

if __name__ == "__main__":
    print(find_longest_string("11010111011"))