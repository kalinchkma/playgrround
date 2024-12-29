
# Given two string `s` and `t`, return `true` is `s` is a subsequence of `t`, or `false` otherwise.

def check_subsequence(s, t):
    i = j = 0
    while i < len(s) and j < len(t):
        if s[i] == t[j]:
            i += 1
        j += 1
    return i == len(s)

if __name__ == "__main__":
    print(check_subsequence("ace", "abcde"))
    print(check_subsequence("aec", "abcde"))
