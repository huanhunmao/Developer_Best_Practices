
// Define Clear Types
// Good Practice: Always define clear and specific types.
function greet(name: string): string {
    return `Hello, ${name}`;
  }

  
//   Bad Practice: Avoid using ‘any’ type unless absolutely necessary.
function greet(name: any): any {
    return `Hello, ${name}`;
    // 'any' type defeats the purpose of TypeScript
  }
  