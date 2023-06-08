// Required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Set the public directory for static files
app.use(express.static(path.join(__dirname, 'views')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
