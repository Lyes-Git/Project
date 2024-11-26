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
app.use(express.json());

// MongoDB connection
// const uri = process.env.MONGO_URI;
const uri = "mongodb+srv://Admin1:Admin@comp229.ohvxw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// const client = new MongoClient(uri);
let usersCollection;

async function connectToMongoDB() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db('Authentication');
      usersCollection = db.collection('users_collection');
  
      // Test insertion of a new user
      const testUser = { username: 'testuser', password: 'testpassword' };
      const existingUser = await usersCollection.findOne({ username: testUser.username });
  
      if (!existingUser) {
        const result = await usersCollection.insertOne(testUser);
        console.log('Test user added:', result.insertedId);
      } else {
        console.log('Test user already exists');
      }
  
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      process.exit(1); // Exit the process on failure
    }
  }
  

connectToMongoDB();



// API route example
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Enable CORS
app.use(cors());
