import express from 'express';
import mongodb from 'mongodb';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS before routes
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let usersCollection;

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('Authentication');
    usersCollection = db.collection('users_collection');

    // Test insertion of a new user on start, debugging purpose.
    //const testUser = { username: 'testuser', password: 'testpassword' };

    //In case username already exists
    // const existingUser = await usersCollection.findOne({ username: testUser.username });
    // if (!existingUser) {
    //   const result = await usersCollection.insertOne(testUser);
    //   console.log('Test user added:', result.insertedId);
    // } else {
    //   console.log('Test user already exists');
    // }

  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process on failure
  }
}

connectToMongoDB();

// POST for registering 
app.post('/api/register', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword ) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Email already in use' });
  }

  //store hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({ email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});


// For loggin in
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  //not case sensitive for email so it is easier to find
  const user = await usersCollection.findOne({
    email: { $regex: new RegExp(`^${email}$`, 'i') },
  });

  if (!user) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  //compare password if it matches
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  res.status(200).json({ message: 'Login successful', email: user.email });
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
