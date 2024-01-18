// index.js
const express = require('express');
const  myMiddleware  = require('./middleware');
// const { myController } = require('./controller');

const app = express();

// Use the middleware for all routes
app.use(myMiddleware);

// Define a route that uses the controller
app.use('/get', myMiddleware.get);
// app.use('/api/somepath', myMiddleware);

// Route handler for the API path, using the controller
// app.get('/api/somepath', myController);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
