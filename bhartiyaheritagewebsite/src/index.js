const express = require("express");
const { User, Feedback } = require("./config"); // Require both models separately
const path = require("path");
const bcrypt = require("bcrypt");
const session = require('express-session');
const cors = require('cors');
const bodyParser = require("body-parser");


const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Register User
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    };

    const existingUser = await User.findOne({ name: data.name });

    if (existingUser) {
        res.send('User already exists. Please choose a different username.');
    } else {
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await User.create(data); // Use create instead of insertMany for a single document
        res.send(`User registered successfully with id: ${userdata._id}`);
    }
});

// Login User
app.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.username });
        if (!user) {
            return res.status(404).send("User not found");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordMatch) {
            req.session.user = { username: user.name };
            res.render("home");
            
        } else {
            return res.status(401).send("Incorrect password");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("An error occurred while processing your request");
    }
});

// Home Route
app.get('/', (req, res) => {
    if (req.session.user) {
        console.log("User session found:", req.session.user.username);
        res.send(`Welcome, ${req.session.user.username}!`); // Display username if logged in
    } else {
        console.log("No user session found");
        res.send("Welcome, guest! Please log in.");
    }
});

// Submit Feedback
app.post('/submitFeedback', async (req, res) => {
    console.log('FeedBack Data', req.body);
    const feedback = new Feedback({
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback
    });

    try {
        const savedFeedback = await feedback.save();
        console.log('Saved Feedback:', savedFeedback); // Log saved feedback
        res.send(`Feedback submitted successfully with the id: ${feedback._id}`);
    } catch (error) {
        res.status(500).send('Error submitting feedback: ' + error);
    }
});

// Start Server
const port = 5200;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
