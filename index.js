require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

// Use the PORT variable from .env
const PORT = process.env.API_PORT;

app.get('/', (req, res) => {
  res.send(`Hello Jayyyyyyyyyyyyy DevOps..... ECS-ECR new!!!!!!!@##R^%R#&%R^%#%^#&^#% + vfsdvjdvsd injhdbvkdffkdvhdfvv ${process.env.MY_ENV_NAME}`);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.MY_ENV_NAME} mode`);
});
