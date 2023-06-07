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
    name: 'User1',
    email: 'User@example.com',
    phone: '1234567890',
    experience: 5,
    type: 'Full-time'
  },
  {
    id: 2,
    name: 'User2',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },

  {
    id: 3,
    name: 'User3',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 4,
    name: 'User4',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 5,
    name: 'User5',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 6,
    name: 'User6',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 7,
    name: 'User7',
    email: 'User@example.com',
    phone: '1234567890',
    experience: 5,
    type: 'Full-time'
  },
  {
    id: 8,
    name: 'User8',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },

  {
    id: 9,
    name: 'User9',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 10,
    name: 'User10',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 11,
    name: 'User11',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 12,
    name: 'User12',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 13,
    name: 'User13',
    email: 'User@example.com',
    phone: '1234567890',
    experience: 5,
    type: 'Full-time'
  },
  {
    id: 14,
    name: 'User14',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },

  {
    id: 15,
    name: 'User15',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 16,
    name: 'User16',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 17,
    name: 'User17',
    email: 'User@example.com',
    phone: '9876543210',
    experience: 3,
    type: 'Part-time'
  },
  {
    id: 18,
    name: 'User18',
    email: 'User@example.com',
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

app.put('/editUser/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});
