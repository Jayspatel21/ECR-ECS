require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

// Use the PORT variable from .env
const PORT = process.env.API_PORT;

app.get('/', (req, res) => {
  res.send(`Hello Jayyyyyyyyyyyyydddyyyy DevOpsdddddddddddd..... ECS-ECR new!!!!!!! ${process.env.ENV_NAME}`);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.ENV_NAME} mode`);
});
