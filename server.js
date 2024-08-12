const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const data = [
    { id: 1, title: 'Data 1', description: 'This is the first piece of data' },
    { id: 2, title: 'Data 2', description: 'This is the second piece of data' },
    { id: 3, title: 'Data 3', description: 'This is the third piece of data' },
];

// GET /api/data - Retrieve all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Start the server using the port from the .env file
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
