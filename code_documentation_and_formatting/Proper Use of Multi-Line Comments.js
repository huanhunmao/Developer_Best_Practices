// 多行注释 

// Good Multi-Line Commenting Practice
/**
 * This function calculates the total price of an order
 * including tax and discount. It applies a tax rate of 8%,
 * and a discount rate is applied if applicable.
 *
 * @param {number} basePrice - The base price of the order.
 * @param {boolean} hasDiscount - Indicates if the order has a discount.
 * @returns {number} The total price after applying tax and discount.
 */
function calculateTotalPrice(basePrice, hasDiscount) {
    const taxRate = 0.08;
    let discount = 0;
    if (hasDiscount) {
      discount = basePrice * 0.1; // 10% discount
    }
    return basePrice + (basePrice * taxRate) - discount;
  }
  


// Bad Multi-Line Commenting Practice  写的 是个锤子  根本 看不清楚 
/*
  This function calculates the price.
  It has parameters.
  It returns a number.
*/
function calculateTotalPrice(basePrice, hasDiscount) {
    // The actual function code
  }
  // Non-informative, redundant comments
  