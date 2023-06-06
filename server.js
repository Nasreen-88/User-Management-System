const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Set up CORS headers
app.use((req, res, next) => {
     // res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Update with your Angular app's URL
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use(express.json()); // this is middleware to Parse JSON request body
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    experience: 5,
    type: 'Full-time'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },

  {
    id: 3,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 4,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 5,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 6,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 7,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    experience: 5,
    type: 'Full-time'
  },
  {
    id: 8,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },

  {
    id: 9,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 10,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 11,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 12,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 13,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    experience: 5,
    type: 'Full-time'
  },
  {
    id: 14,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },

  {
    id: 15,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 16,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 17,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 18,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/addUser', (req, res) => {
  const newUser = req.body; // Extract the new user data from the request body
  users.push(newUser); // Add the new user to the users array
  res.status(201).json(newUser); // Return the newly added user as response
});


app.listen(3000, () => {
  console.log('API server is running on port 3000');
});
