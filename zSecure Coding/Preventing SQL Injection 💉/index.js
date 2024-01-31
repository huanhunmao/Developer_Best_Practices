// bad 
// Using string concatenation in SQL queries
const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;


// good 
// Using parameterized queries  使用参数 而不是 直接 明文 使用 password 查询
const query1 = `SELECT * FROM users WHERE username = ? AND password = ?`;
db.query(query1, [username, password]);
