// 防止暴力 攻击 
// Example: Rate Limiting with Express-rate-limit  使用 Express-rate-limit 进行速率限制
const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use("/api/", apiLimiter);
