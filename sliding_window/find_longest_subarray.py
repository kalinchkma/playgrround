
def find_longest_subarray_sum(nums: list[int], k: int) -> int:
    left = right = curr = answer = 0
    for right in range(len(nums)):
        curr += nums[right]
        while curr > k:
            curr -= nums[left]
            left += 1
        answer = max(answer, right - left + 1)
    return answer
        
if __name__ == "__main__":
    print(find_longest_subarray_sum([3, 1, 2, 7, 4, 2, 1, 1, 5], 6))