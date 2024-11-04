// file-handler.js
const fs = require("fs");

// Create a welcome.txt file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log('welcome.txt created with "Hello Node"');
});

// Read from hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Data from hello.txt:", data);
});
