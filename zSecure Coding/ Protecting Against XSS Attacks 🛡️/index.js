// bad 
// Rendering user input directly to the DOM
document.getElementById("user-content").innerHTML = userInput;

// good 
// Escaping user input before rendering  并不是 .textContent .innerHTML 不安全 而是 没有进行包装不安全
const safeInput = escapeHtml(userInput);
document.getElementById("user-content").textContent = safeInput;

// Example: Using DOMPurify to sanitize user input
const cleanInput = DOMPurify.sanitize(userInput);
document.getElementById("user-content").innerHTML = cleanInput;

