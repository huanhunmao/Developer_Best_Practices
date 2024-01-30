// Good Practice: Use interfaces to describe object shapes.
interface User {
    name: string;
    age: number;
  }
  
  const user: User = { name: "Alice", age: 30 };

  
//   Bad Practice: Avoid inline type definitions for objects.
const user: { name: string; age: number } = { name: "Alice", age: 30 };
// Inline types are harder to maintain
