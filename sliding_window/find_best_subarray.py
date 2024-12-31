

def find_best_subarray(nums, k):
    curr = 0
    for i in range(k):
        curr += nums[i]
    
    ans = curr
    for i in range(k, len(nums)):
        curr += nums[i] - nums[i - k]
        ans = max(ans, curr)
    
    return ans

if __name__ == "__main__":
    nums = [3, -1, 4, 12, -8, 5, 6]

    print(find_best_subarray(nums, 4))

