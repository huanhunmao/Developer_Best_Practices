// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Later in the same file, another calculateArea function is defined for a square
function calculateArea(side) {
    return side * side;
}

// Usage
const circleArea = calculateArea(5); // Intended to calculate area of a circle
