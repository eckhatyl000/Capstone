// Example user model
// Replace this code with your actual user model and database interaction logic

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);
