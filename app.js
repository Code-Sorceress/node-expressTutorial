// First, we need to bring in the Express package to help us create our routes.
const express = require("express");

// Then, we create an app by calling express().
const app = express();

// This sets the port for our app to 3000. We can change it if we want.
const port = 9000;

// First route: /test
app.get("/test", (req, res) => {
  // This route just sends back a message saying "success"
  res.json({ message: "success" });
});

// Second route: /add
app.get("/add", (req, res) => {
  // We get the two numbers from the URL's query parameters
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  // We add the two numbers
  const sum = num1 + num2;

  // We send back a message with "success" and the sum of the numbers
  res.json({ message: "success", data: sum });
});

// Finally, we tell our app to start listening on the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
