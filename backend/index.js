const express = require('express');
const appconfig = require('./src/config/appconfig.js');
const cors = require('cors');
const connectDB = require('./src/config/db.js')

// Create express application
const app = express();

// Define a Port
const PORT = appconfig.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to db
connectDB();

// Start server, listen on defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
