// Using CSS Variables for Global Color Management 🎨 全局管理


// Defining CSS Variables
// :root {
//     --primary-color: #5A67D8;
//     --secondary-color: #ED64A6;
//     --text-color: #333333;
//     --background-color: white;
//     --warning-color: #ffcc00;
//   }
  

// Using CSS Variables in Stylesheets
// .header {
//     background-color: var(--primary-color);
//     color: var(--background-color);
//   }
  

// 主题颜色定义  Dark Mode Example with CSS Variables
// .dark {
//     --primary-color: #9f7aea;
//     --background-color: #2d3748;
//     --text-color: #cbd5e0;
//   }


// Managing Colors in JSX with CSS Variables 其实 一般使用 className 更好  直接 style 不太好
const MyComponent = () => (
    <div style={{ color: "var(--text-color)", backgroundColor: "var(--background-color)" }}>
      Welcome
    </div>
  );
  