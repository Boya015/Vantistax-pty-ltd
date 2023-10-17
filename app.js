const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the port you prefer

// Define the static folder to serve your files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
