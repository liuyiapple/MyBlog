# 练习

## leetcode 练习

练习题，不是最优解，自己先把题解出来

## 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

示例 1：

::: code-group

```text [题目]
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

```js [解答]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexArr.push(i);
        indexArr.push(j);
      }
    }
  }

  return indexArr;
};
```

:::

## 寻找两个正序数组的中位数

::: code-group

```text [题目]

给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。
```

```js [解答]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arrLength = nums1.length + nums2.length;
  let newArr = [...nums1, ...nums2];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length + 1; j++) {
      let flag = null;
      if (newArr[i] < newArr[j]) {
        flag = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = flag;
      }
    }
  }
  if (arrLength % 2 != 0) {
    return newArr[Math.ceil(arrLength / 2) - 1];
  } else {
    return (newArr[arrLength / 2 - 1] + newArr[arrLength / 2]) / 2;
  }
};
```

:::
