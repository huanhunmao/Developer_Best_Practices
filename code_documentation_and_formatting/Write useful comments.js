// Good Practice
// Loop through users and apply discounts(应用折扣) to eligible ones(符合的用户)
users.forEach(user => {
    if (user.isEligibleForDiscount()) {
      applyDiscount(user);
    }
  });

// Calculate the area(区域) of a rectangle(长方形)
function calculateArea(length, width) {
    return length * width;
  }
  


//   Bad Practice  写的太多 太冗余了   最大的禁忌 就是 每行都写注释 
// Start a loop
users.forEach(user => {
    // Check if the user is eligible for discount
    if (user.isEligibleForDiscount()) {
      // Apply discount to the user
      applyDiscount(user);
    }
  });
  // Redundant comments that simply restate the code

// Calculate area
function calculateArea(l, w) {
    return l * w;
    // Ambiguous and unhelpful comment
  }
    