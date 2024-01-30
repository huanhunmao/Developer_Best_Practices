// Good Example: Leveraging TypeScript’s Types for Performance
interface Comparable {
    compareTo(other: Comparable): number;
  }
  
  // Implementing an efficient sorting algorithm using the Comparable interface
  
//   Bad Example: Ignoring TypeScript’s Type System
// Using 'any' type reduces the ability to optimize and can lead to runtime errors
function sortItems(items: any[]): any[] {
    // Sorting logic without type checks
  }