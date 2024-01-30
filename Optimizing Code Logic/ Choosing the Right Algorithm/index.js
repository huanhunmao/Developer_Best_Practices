// 选择 正确的算法 
// Good Example: Efficient Algorithm Selection 
// Binary search for sorted arrays  二分查找应用于 排序数组
// 时间复杂度：O(log n) - 二分查找每次都将搜索范围缩小为一半，因此时间复杂度是对数级别的。
// 空间复杂度：O(1) - 二分查找只需要常数级别的额外空间，因为只使用了几个变量来保存索引值。
function binarySearch(array: number[], target: number): boolean {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 中间值

        if (array[mid] === target) {
            return true;  // 找到目标值
        } else if (array[mid] < target) {
            left = mid + 1;  // 目标值在右半部分
        } else {
            right = mid - 1;  // 目标值在左半部分
        }
    }

    return false;  // 未找到目标值
}

  
//   Bad Example: Inefficient Algorithm Selection
// Linear search on a sorted array is less efficient  线性搜索  就是直接 一个一个匹配 
// 时间复杂度：O(n) - 线性搜索的时间复杂度是线性的，与数组的长度成正比，因为最坏情况下需要遍历整个数组。
// 空间复杂度：O(1) - 线性搜索只需要常数级别的额外空间，因为只使用了循环变量 i。
function linearSearch(array: number[], target: number): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;  // 找到目标值
        }
    }

    return false;  // 未找到目标值
}

  