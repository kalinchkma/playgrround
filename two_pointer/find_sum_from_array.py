
def check_sum_from_array(arr, target):
    left = 0
    right = len(arr) - 1

    while left < right:
        s = arr[left] + arr[right]
        if s == target:
            return True
        if s < target:
            left += 1
        if s > target:
            right -= 1
    return False

if __name__ == "__main__":
    nums = [1,2,3,4,6,8,9,14,15]

    print(check_sum_from_array(nums, 13))
    print(check_sum_from_array(nums, 10))
    print(check_sum_from_array(nums, 70))

