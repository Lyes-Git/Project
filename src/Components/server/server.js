import express from 'express';
import mongodb from 'mongodb';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import cors from 'cors';
import path from 'path'; // Import path for serving static files

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

console.log('MongoDB URI:', process.env.MONGO_URI);

let usersCollection;

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('Authentication');
    usersCollection = db.collection('users_collection');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process on failure
  }
}

connectToMongoDB();

// POST for registering 
app.post('/api/register', async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Full name, email, and password are required' });
  }

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Email already in use' });
  }

  // Store hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({ fullName, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// For logging in
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Case-insensitive email match
  const user = await usersCollection.findOne({
    email: { $regex: new RegExp(`^${email}$`, 'i') },
  });

  if (!user) {
    return res.status(404).json({ error: 'User does not exist' });
  }

  // Compare password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Return the user's full name and email
  res.status(200).json({ message: 'Login successful', fullName: user.fullName, email: user.email });
  console.log(user); // Add this line for debugging

});

// Checkout route
app.post('/api/checkout', async (req, res) => {
  const { userDetails, cartItems } = req.body;

  if (!userDetails || !cartItems || cartItems.length === 0) {
    return res.status(400).json({ error: 'User details and cart items are required' });
  }

  try {
    const order = {
      userDetails,
      cartItems,
      totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      orderDate: new Date(),
    };

    const ordersCollection = client.db('Authentication').collection('orders');
    const result = await ordersCollection.insertOne(order);

    res.status(201).json({ message: 'Order placed successfully', orderId: result.insertedId });
  } catch (error) {
    console.error('Failed to process checkout:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});


// Get order history for a user
app.get('/api/order-history', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const ordersCollection = client.db('Authentication').collection('orders');

    // Use a case-insensitive query for email matching
    const orders = await ordersCollection.find({
      'userDetails.email': { $regex: new RegExp(`^${email}$`, 'i') },
    }).toArray();

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this email' });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error('Error retrieving order history:', error);
    res.status(500).json({ error: 'Failed to retrieve order history' });
  }
});





// Serve React static files in production
const __dirname = path.resolve(); // Ensure correct directory reference

if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React frontend build
  app.use(express.static(path.join(__dirname, 'dist'))); // For Vite
  // app.use(express.static(path.join(__dirname, 'build'))); // For Create React App

  // Serve index.html for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html')); // For Vite
    // res.sendFile(path.resolve(__dirname, 'build', 'index.html')); // For Create React App
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
