// Good Example: Efficient Function  重点是 里面 逻辑 需要简短 简洁  
function quickSort(data: number[]): number[] {
    // Efficient sorting logic
  }

  

// Bad Example: Inefficient Function
function slowSort(data: number[]): number[] {
    // Inefficient sorting logic with unnecessary complexity
  }
  


//   Good Example: Using a Mapping Object   这个感觉 非常 常用 需要 注意， 确实 多次 写成了 下面的 bad 形式
type IconFillColor = "primary" | "secondary";

const iconFillColors: Record<IconFillColor, string> = {
  "primary": "#000000",
  "secondary": "#808080",
};

export function getIconFillColor(fillColor: IconFillColor) {
  return iconFillColors[fillColor] ?? throw new Error(`Invalid fill color: ${fillColor}`);
}


// Bad Example: Using a Switch Statement
type IconFillColor = "primary" | "secondary";

export function getIconFillColor(fillColor: IconFillColor) {
  switch (fillColor) {
    case "primary":
      return "#000000";
    case "secondary":
      return "#808080";
    default:
      throw new Error(`Invalid fill color: ${fillColor}`);
  }
}
