# Sliding window

Like two pointers, sliding windows work the same with arrays and strings.
A sliding window is actually implemented using two pointers. 
Before sliding window we need to understand subarrays.

A Subarray is a contiguous section of the array. All the elements must be adjacent to each other in the 
original array and in their original order. Example, `[1, 2, 3, 4]` the subarrays are:

- `[1]`, `[2]`, `[3]`, `[4]`
- `[1, 2]`, `[2, 3]`, `[3, 4]`
- `[1, 2, 3]`, `[2, 3, 4]`
- `[1, 2, 3, 4]`

A subarray can be defined by two indices, the start and end. For example, with `[1, 2, 3, 4]` the subarray `[2, 3]` has a starting index of `1` and an ending index of `2`. we can call the starting index the **left bound** and the ending index the **right bound**. Another name for subarray in this context is `window`.

When should we use sliding window?

Commpon group of problems involving subarrays that can be sloved efficently with sliding window.

**First**, the problem will either explicitly or implecitly define criteria that make a subarray "valid". There are 2 components regarding what makes a subarray valid:

1. A constraint metric, This is some attribute of a subarray. It could be the sum, the number of unique elements, the frequency of a specific elements, or any other attribute.
2. A numeric restriction on the constraint metric. This is what the constraint metric should be for a subarray to be considered valid.

For example, Let's say a problem declares a subarray is valid if it has a sum less than or equal to `10`.
The constraint metric here is the sum of the subarray, and the numeric trestriction is `<=` `10`. A subarray is considered valid if its constraint metric conforms to the numeric restriction.

**Second**, the problem will ask you to find valid subarray in some way.

1. The most common task you will see is finding the **best** valid subarray. The problem will define what makes a subarray **better** than another. For example, a problem might ask you to find the **longest** valid subarray.
2. Another common task is finding the number of valid subarrays.

Some common example problems:

- Find the longest subarray with a sum less than or equal to `K`
- Find the longest substring that has at most one `"0"`
- Find the number of subarrays that have a product less than `k`

Algorithms to implement sliding window to find the subarray with a sum less than or equal to `k`:

```code
function fn(nums, k):
    left = 0
    curr = 0
    answer = 0
    for (int right = 0; right < nums.length; right++):
        curr += nums[right]
        while (curr > k):
            curr -= nums[left]
            left++
        
        answer = max(answer, right - left + 1)
    return asnwer
```

```code
function fn(arr):
    left = 0
    for (int right = 0; right < arr.length; right++):
        Do som logic to "add" element at arr[right] to window

        while WINDOW_IS_INVALID:
            Do some logic to "remove" element at arr[left] from window
            left++
        Do some logic to update the answer
```

Example 1: Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k.

Example 2: You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

Because the string can only contain "1" and "0", another way to look at this problem is "what is the longest substring that contains at most one "0"?".

For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

**Number of subarrays**

If a problem asks for the number of subarrays that fit some constraint, we can still use sliding window, but we need to use a neat math trick to calculate the number of subarrays.

Let's say that we are using the sliding window algorithm we have learned and currently have a window (left, right). How many valid windows end at index right?

There's the current window (left, right), then (left + 1, right), (left + 2, right), and so on until (right, right) (only the element at right).

You can fix the right bound and then choose any value between left and right inclusive for the left bound. Therefore, the number of valid windows ending at index right is equal to the size of the window, which we know is right - left + 1.


Example 3: Subarray Product Less Than K.

Given an array of positive integers nums and an integer `k`, return the number of subarrays where the product of all the elements in the subarray is strictly less than `k`.

For example, given the input `nums = [10, 5, 2, 6]`, `k = 100`, the answer is `8`. The subarrays with products less than k are:

`[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]`

***Fixed window sixe**

