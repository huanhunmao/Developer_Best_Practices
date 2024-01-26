// Bad Practices to Avoid 📛

// Inline Color Definitions
/* Bad Practice in css  别直接用颜色定义  更好的方式是 变成统一的变量 统一进行管理*/
// .some-class {
//     color: #333333; /* Direct color definition */
//     background-color: #ffffff; /* Hardcoded color */
//   }
  
/* Bad Practice in JSX  直接写 style 后面非常难维护 !*/
const MyComponent = () => (
    <div style={{ color: '#333333', backgroundColor: '#ffffff' }}>
      Content
    </div>
  );
  