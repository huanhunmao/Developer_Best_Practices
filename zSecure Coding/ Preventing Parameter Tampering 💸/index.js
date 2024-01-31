// 防止 参数被 篡改 
<>
Understanding the Risk
</>

{/* <>
Bad Practice: Trusting Client-Supplied Prices
</>  */}
// Vulnerable to parameter tampering
app.post("/process-payment", (req, res) => {
    const { productId, userPrice } = req.body;
    // Using userPrice for transaction
  });


{/* <>
Good Practice: Server-Side Price Validation  从客户端拿到参数后 调用后端接口取数据 不要完全相信客户端数据!!!! 这个感觉太应该注意了
</>    */}
// Secure approach
app.post("/process-payment", (req, res) => {
    const { productId } = req.body;
    const actualPrice = getProductPrice(productId); // Fetch the real price from the server
    // Process payment with actualPrice, avoiding tampering
  });
  