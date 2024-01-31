// bad 
// <!-- GET request for sensitive action -->
<a href="/delete-account">Delete Account</a>

// good 
// Backend: Generate and validate CSRF tokens  非常明确的 中间件  csrfProtection
app.use(csrfProtection);
app.post("/delete-account", (req, res) => {
  // Validate CSRF token
});

// <!-- Frontend: Include CSRF token in form --> 在实际工作中，服务器端应该验证CSRF令牌，以确保请求是由合法的用户发起的，而不是恶意站点
<form action="/delete-account" method="POST">
  <input type="hidden" name="_csrf" value="{csrfToken}" />
  <button type="submit">Delete Account</button>
</form>
