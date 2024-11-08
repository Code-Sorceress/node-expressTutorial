# node-expressTutorial

Here's a simple code in JavaScript to create two routes with Node.js and Express. I'll explain each part so it's easy to understand.

### Code

```javascript
// First, we need to bring in the Express package to help us create our routes.
const express = require("express");

// Then, we create an app by calling express().
const app = express();

// This sets the port for our app to 3000. We can change it if we want.
const port = 3000;

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
```

### Explanation

1. **Setup Express**: `const express = require('express');` - This line loads Express, a tool we use to make routes (places the app goes when you visit URLs).

2. **Create the app**: `const app = express();` - Here, we’re creating our app so we can start using Express.

3. **Set the Port**: `const port = 3000;` - We tell our app to use port 3000. This is like saying, “let’s open the door at number 3000 for our app.”

4. **Route `/test`**:

   - `app.get('/test', (req, res) => { ... });` - This creates a route at `/test`. When you visit `http://localhost:3000/test`, it will give back a message.
   - `res.json({ message: "success" });` - We send back a message as JSON: `{"message": "success"}`.

5. **Route `/add`**:

   - `app.get('/add', (req, res) => { ... });` - This is another route called `/add`. This route can add two numbers from the URL.
   - `req.query.num1` and `req.query.num2` - This takes two numbers from the URL. For example, if we go to `http://localhost:3000/add?num1=5&num2=10`, `num1` will be 5 and `num2` will be 10.
   - `parseInt(...)` - This turns the numbers from the URL into real numbers we can add.
   - `const sum = num1 + num2;` - Here, we add the two numbers.
   - `res.json({ message: "success", data: sum });` - We send back `success` and the answer.

6. **Start the Server**: `app.listen(port, ...);` - This makes the app start so we can go to `http://localhost:3000` in the browser. It listens at port 3000, waiting for people to visit our routes (`/test` or `/add`).

This code lets us add two numbers by typing them in the URL, and it sends back the answer with a success message!
