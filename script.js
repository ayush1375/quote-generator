const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Do something today that your future self will thank you for.",
    "Dream big and dare to fail. – Norman Vaughan",
    "Stay hungry, stay foolish. – Steve Jobs"
  ];
  
  function generateQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = quote;
  }
  