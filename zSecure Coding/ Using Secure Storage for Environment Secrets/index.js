//  use services like 1Password or Phase
// For higher security, especially in production, 
// These services securely manage and inject secrets into your application.

// Example: Integrating 1Password
// Assuming you have 1Password CLI set up and secrets synced
const { op } = require("1password");
(async () => {
  const apiKey = await op.getItem("API_KEY");
  process.env.API_KEY = apiKey;
})();
