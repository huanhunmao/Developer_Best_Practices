
// Tailwind CSS for Consistent Color Usage 一致性颜色使用

// Defining Colors in Tailwind Configuration
// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#5A67D8',
          secondary: '#ED64A6',
          // other colors...
        },
      },
    },
    // other configurations...
  };

//   Using Tailwind Classes in JSX
const MyComponent = () => (
    <h1 className="text-primary bg-secondary">Welcome to My Site</h1>
  );