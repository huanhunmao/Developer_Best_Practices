// When users click a password reset link 
// 这通常涉及到向用户的注册邮箱发送包含特殊令牌的链接，用户通过点击链接来验证身份并进行密码更改。
// 这种方法增加了安全性，因为攻击者需要<<同时获取用户的邮箱访问权限和重置链接，才能成功重置密码>>
// (e.g., https://example.com/reset-password?token=12345), the page may load external resources,
//  potentially exposing the URL with the token.