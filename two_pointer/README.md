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


Another way to use two pointers

`Move along both inputs simultaneously until all elements have been checked`

Instructions:

1. Create two pointers, one for each iterable. Each pointer should start at the first index.
2. Use a while loop until one of the pointers reaches the end of its iterable.
3. At each iteration of the loop, move the pointers forward. This means incrementing either one of the pointers of both pointers.
4. Because our while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end of its respective iterable when loop finishes.

```code
function fn(arr1, arr2):
    i = j = 0
    while i < arr2.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++
        // Step 4: make sure both iterables are exhausted
        // Note that one of these loops would run
        while i < arr1.length:
            Do some logic here depending on the problem
            i++
        
        while j < arr2.length:
            Do some logic here depending on the problem
            j++
```
Similer to above this method have a linear time complexity of `0(n+m)`

Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

Example 4: Is Subsequence
Given two string `s` and `t`, return `true` is `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.