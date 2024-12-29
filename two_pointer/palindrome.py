
def checkPalindrom(s):
    left = 0
    right = len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True


if __name__ == "__main__":
    txt = {
        "abcdcba": True,
        "racecar": True,
        "jsawqo": False
    }

    for key in txt:
        if checkPalindrom(key) != txt[key]:
            print("Faild:")
            print(f"Expected: {txt[key]}\nFound: {checkPalindrom(key)}") 
    print("Pass")