// 递归函数/性能
// Good Example: Tail-Recursive Optimization  尾递归优化
// 在尾递归的实现中，累加器（accumulator）的值被传递给下一次递归调用，而递归调用本身不包含任何后续的计算步骤
function factorial(n, accumulator = 1) {
    if (n === 0) {
      return accumulator;
    }
    return factorial(n - 1, n * accumulator);
  }

//   Bad Example: Non-Optimized Recursive Function  一直会递归自身 每次递归调用都会在堆栈中创建新的帧，如果输入值 n 较大，可能导致堆栈溢出
function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1); // Potential stack overflow for large n
  }
  