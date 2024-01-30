// 好的设计模式   这个地方 好牛逼 ！！！  不然 一般就会写多个函数  来多次调用来解决 
// Good Example: Strategy Pattern with Functions
const operations = {
    create: (data) => {
      // create logic
    },
    update: (data) => {
      // update logic
    },
    delete: (data) => {
      // delete logic
    },
    // ...more operations...
  };
  
  function processRequest(type, data) {
    const operation = operations[type];
    if (operation) {
      operation(data);
    } else {
      throw new Error("Invalid operation type");
    }
  }
  


// Bad Example: Multiple If Conditions   这样确实 看起来 比较繁琐 和 不直观
function processRequest(type) {
    if (type === "create") {
      // create logic
    } else if (type === "update") {
      // update logic
    } else if (type === "delete") {
      // delete logic
    }
    // ...more conditions...
  }
  