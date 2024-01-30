// 利用联合类型实现灵活性
// Good Practice: Use union types for variables that might hold different types.
let id: string | number;
id = "123"; // valid
id = 123; // also valid


// Bad Practice: Overusing union types can lead to unclear code.
let value: string | number | boolean | User;
// Too many types can make the code less predictable

