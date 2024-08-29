require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

// Use the PORT variable from .env
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send(`Hello DevOps ! in ${process.env.NODE_ENV}`);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
