const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.get('/skills', (req, res) => {
  res.render('skills', { title: 'Skills' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

app.get('/experience', (req, res) => {
  res.render('experience', { title: 'Experience' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});