import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return mongoose;
  }

  try {
    await mongoose.connect(MONGODB_URI!);
    isConnected = true;
    console.log('Connected to MongoDB');
    return mongoose;
  } catch (error) {
    isConnected = false;
    if (error instanceof Error) {
      console.error('MongoDB connection error:', error.message);
      throw error;
    }
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
} 