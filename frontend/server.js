const express = require('express');
const app = express();
const PORT = 8000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is your backend server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
