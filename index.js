// index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/experience', require('./routes/experienceRoutes'));
app.use('/api/projects', require('./routes/projectRoutes')); // Add project routes
app.use('/api/blogs', require('./routes/blogRoutes')); // Add blog routes

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API');
  });
  
