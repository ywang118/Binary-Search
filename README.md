# Binary-Search
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

`
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4`


## simple way

The simple way is to iterating over the nums of array, and for each index item, and check if that item equal to the target value. if it exits, return the index of that value. after it go through the entire array, then you could return the -1.

big O notation: (is a mathematical term that describes the limit of a particular function) this way is N time complexity: this program will take linear time essentially, it will take as long as the input sizes.
