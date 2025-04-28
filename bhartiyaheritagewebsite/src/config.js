const mongoose = require('mongoose');

// Connect to MongoDB
const connect = mongoose.connect("mongodb://localhost:27017/BharatHeritage", { useNewUrlParser: true, useUnifiedTopology: true });

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch((error) => {
    console.log("Database connection failed:", error);
});

// Create Schema for user login
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create Schema for feedback
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String,
    submittedAt: { type: Date, default: Date.now }
});

// Create models for user and feedback
const User = mongoose.model('User', Loginschema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Export models
module.exports = {
    User,
    Feedback
};
