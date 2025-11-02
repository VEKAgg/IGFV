require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  username: { type: String, required: true, unique: true },
  uid: { type: Number, required: true, unique: true },
  realName: String,
  profilePicture: String,
  bio: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLoginAt: Date,
  lastIp: String,
  browserFingerprint: String,
  isActive: { type: Boolean, default: true },
  role: { type: String, enum: ['user', 'moderator', 'admin'], default: 'user' },
  subscriptionTier: { type: String, enum: ['basic', 'premium', 'pro'], default: 'basic' },

  stats: {
    level: { type: Number, default: 1 },
    xp: { type: Number, default: 0 },
    activeGames: { type: Number, default: 0 },
    communityMembers: { type: Number, default: 0 },
    achievements: { type: Number, default: 0 },
    gameScore: { type: Number, default: 0 },
    recentActivity: [{
      type: String,
      title: String,
      description: String,
      timestamp: Date
    }]
  },

  discord: {
    id: String,
    username: String,
    discriminator: String,
    avatar: String,
    roles: [String],
    joinedAt: Date,
    boostingSince: Date,
    serverLevel: { type: Number, default: 0 },
    serverXp: { type: Number, default: 0 },
    infractions: [{
      type: String,
      reason: String,
      moderator: String,
      date: Date
    }]
  }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');
    
    console.log('Database reset successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error resetting database:', error);
    process.exit(1);
  }
}

seedDatabase(); 