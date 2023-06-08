const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes
const loginRoutes = require('./server/routes/loginRoutes');
const dashboardRoutes = require('./server/routes/dashboardRoutes');

app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
