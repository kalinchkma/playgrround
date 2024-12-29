# Two pointer
Two Pointer is a technique that used to slove array and string problem

Basic technique -
Start the pointers at the edges of the input. Move them towards each other until they meet
Instructions:

1. start oone pointer at the first index `0` and the other pointer at the last index `input.length - 1`
2. Use a while loop unitl the pointers are equal to each other
3. At each iteration of the loop. move the pointers towards each other.

```code
function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following
            1. left++
            2. right--
            3. Both left++ and right--
```
The strength of this iteration is that we will never have more than `O(n)` iterations

Palindrome problem can be solve using two pointer method 
Two pointer is efficient for `0(n)` time and `0(1)` space complexity

Example 1: Given a string s, return true if it is a palindrome, false otherwise.

A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13

Note: i we solve this with brute force time complexity will be `0(n^2)`. we can improve it using two pointer time complexity will be `0(n)`.
