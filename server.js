const express = require('express');

const app = express();
const PORT = 3000;

// Home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h1><p>Welcome to the server!</p><p><a href="/home">Go to Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/401">401 Error</a></p>');
});

app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1><p>Welcome to the home page.</p><p><a href="/">Back to Welcome</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/401">401 Error</a></p>');
});

// About page
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>I\'m a software developer with a chill personality and a love for music. I have developed a passion for music and I\'m always looking for new ways to improve myself. Over my years of development, I made 2 apps and 1 project.</p><p><a href="/">Back to Welcome</a> | <a href="/home">Home</a> | <a href="/contact">Contact</a> | <a href="/401">401 Error</a></p>');
});

// Contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>Contact me at <a href="mailto:juarezjohan650@gmail.com">Email</a> | Here is my <a href="https://txtscla.slack.com/team/U076HGVJKKK">Slack</a></p><p><a href="/">Back to Welcome</a> | <a href="/home">Home</a> | <a href="/about">About</a> | <a href="/401">401 Error</a></p>');
});

// Fake 401 error page
app.get('/401', (req, res) => {
    res.status(401).send('<h1>401 Unauthorized</h1><p>You are not authorized to view this page.</p><p><a href="/">Back to Welcome</a> | <a href="/home">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a></p>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});