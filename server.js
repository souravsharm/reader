const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Store the text temporarily in memory (resets on server restart)
let currentText = '';

// Route to serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle text submission
app.post('/submit-text', (req, res) => {
  currentText = req.body.text || '';
  res.json({ success: true });
});

// Route to get the current text
app.get('/get-text', (req, res) => {
  res.json({ text: currentText });
});

// Route to serve the reader page
app.get('/read', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'read.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
