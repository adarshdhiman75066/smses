const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static files (like logo.png, CSS, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// 2. Route for the Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 3. Catch-all route for 404 Not Found
// If a user types a URL that doesn't match anything above, this will run.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is running! Visit http://localhost:${PORT} in your browser.`,
  );
});
