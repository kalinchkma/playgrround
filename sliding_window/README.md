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

