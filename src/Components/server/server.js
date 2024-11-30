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
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// For loggin in
app.get("/api/login", async (req, res) => {

  let username = req.body.username;
  // console.log("Querying username:", username);
  // console.log("Query result:", user);
  // Not case sensitive, for finding user in database.
  let user = await usersCollection.findOne({
    username: { $regex: new RegExp(`^${username}$`, 'i') } 
  });
  console.log("Query result:", user);

  if (!user) {
    return res.status(404).json({ error: "User does not exist" });
  }

  // Extract username and password
  const { username: foundUsername, password } = user;

  console.log("password test: ", password);

  res.status(200).json({ username: foundUsername, password });


});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
