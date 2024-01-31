// Storing Secrets in .env Files  重要的密钥 放在 .env 中 并不上传到云端

// Bad Practice: Hardcoding secrets in code
// Bad Practice: Hardcoded secret
const API_KEY = "hardcoded-secret-key";


// Good Practice: Storing secret in .env file  用的 非常多 
// Example of accessing a secret from .env file
require("dotenv").config();
const API_KEY1 = process.env.API_KEY;

