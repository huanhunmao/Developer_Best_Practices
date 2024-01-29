// Bad Practice: Everything in one file
import React from 'react';
// Imports for components, utilities, types all mixed together...

const MyComponent = () => { /* ... */ };
const AnotherComponent = () => { /* ... */ };
// Multiple components and utility functions defined here...

// thousands of lines of code... 🚂

export default MyComponent;
