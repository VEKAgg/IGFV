const { connectToDatabase } = require('../src/lib/mongoose');
const User = require('../src/models/User');

const sampleUsers = [
  {
    uid: 1,
    username: 'john_doe',
    email: 'john@example.com',
    password: 'hashed_password_1',
    profilePicture: '/images/avatars/avatar1.jpg',
    bio: 'Gaming enthusiast and community builder',
    stats: {
      level: 25,
      activeGames: 3,
      communityMembers: 150,
      achievements: 42,
      gameScore: 2800
    },
    discord: {
      id: '123456789',
      username: 'john_doe#1234'
    }
  },
  {
    uid: 2,
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'hashed_password_2',
    profilePicture: '/images/avatars/avatar2.jpg',
    bio: 'Professional gamer and content creator',
    stats: {
      level: 35,
      activeGames: 5,
      communityMembers: 300,
      achievements: 78,
      gameScore: 4500
    },
    discord: {
      id: '987654321',
      username: 'jane_smith#5678'
    }
  }
];

async function seedDatabase() {
  try {
    await connectToDatabase();
    
    // Clear existing users
    await User.deleteMany({});
    
    // Insert sample users
    await User.insertMany(sampleUsers);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 