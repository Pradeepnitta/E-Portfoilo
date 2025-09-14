const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', currentPage: 'home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me', currentPage: 'about' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects', currentPage: 'projects' });
});

app.get('/skills', (req, res) => {
    res.render('skills', { title: 'Skills', currentPage: 'skills' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', currentPage: 'contact' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});