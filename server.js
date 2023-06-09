const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes
const loginRoutes = require('./routes/loginRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const session = require('express-session');


app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use(
    session({
        secret: 'SW2kL',
        resave: false,
        saveUninitialized: false,
        // You can customize other options as per your requirements
    })
);

// Authentication routes and other routes
const authRoutes = require('./routes/authRoutes');
const otherRoutes = require('./routes/otherRoutes');
app.use('/auth', authRoutes);
app.use('/other', otherRoutes);
// Create a route for creating a new character
app.post('/api/characters', (req, res) => {
    // Logic to create a new character
    // Handle the request and send the response
});
// Create a route for retrieving character details
app.get('/api/characters/:id', (req, res) => {
    // Logic to retrieve character details
    // Handle the request and send the response
});

// Create a route for updating character information
app.put('/api/characters/:id', (req, res) => {
    // Logic to update character information
    // Handle the request and send the response
});

// Create a route for deleting a character
app.delete('/api/characters/:id', (req, res) => {
    // Logic to delete a character
    // Handle the request and send the response
});


// Create a route for creating a new character
app.post('/api/characters', (req, res) => {
    // Logic to create a new character
    const newCharacter = req.body;
    // Save the new character to the database
    // ...
    // Send a response indicating success or failure
    res.json({ message: 'Character created successfully' });
});

// Create a route for retrieving character details
app.get('/api/characters/:id', (req, res) => {
    // Logic to retrieve character details
    const characterId = req.params.id;
    // Retrieve character details from the database
    // ...
    // Send the character details in the response
    res.json({ character: { id: characterId, name: 'John Doe', class: 'Warrior' } });
});

// Create a route for updating character information
app.put('/api/characters/:id', (req, res) => {
    // Logic to update character information
    const characterId = req.params.id;
    const updatedData = req.body;
    // Update the character in the database
    // ...
    // Send a response indicating success or failure
    res.json({ message: 'Character updated successfully' });
});

// Create a route for deleting a character
app.delete('/api/characters/:id', (req, res) => {
    // Logic to delete a character
    const characterId = req.params.id;
    // Delete the character from the database
    // ...
    // Send a response indicating success or failure
    res.json({ message: 'Character deleted successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://Eckhatyl000:<TeeGee%231>@docdb-2023-06-08-20-30-05.cluster-cknlngax0gto.us-west-2.docdb.amazonaws.com:27017';
// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB cluster
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');

        // Connection successful, perform database operations
        const db = client.db('<database-name>');

        // Example: Insert a document into a collection
        const collection = db.collection('<collection-name>');
        collection.insertOne({ name: 'John Doe', age: 30 }, (err, result) => {
            if (err) {
                console.error('Error inserting document:', err);
                return;
            }

            console.log('Document inserted:', result.insertedCount);
            client.close();
        });
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();
