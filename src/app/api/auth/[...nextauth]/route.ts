import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

// For demo purposes, we're using a simple credentials provider
// In production, you should use proper authentication
const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || 'dummy-id',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || 'dummy-secret',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'dummy-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'dummy-secret',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || 'dummy-id',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'dummy-secret',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || 'dummy-id',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'dummy-secret',
    }),
    // This is a fallback for development - replace with real providers in production
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // This is a mock user - in production, validate against your database
        if (credentials?.username === 'user' && credentials?.password === 'password') {
          return {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
            image: 'https://avatars.githubusercontent.com/u/1?v=4',
            // Add custom fields for your user profile
            discord: {
              id: '123456789',
              username: 'demo_user',
            },
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add custom user data to the token
      if (user) {
        token.id = user.id;
        token.discord = user.discord;
      }
      return token;
    },
    async session({ session, token }) {
      // Add custom token data to the session
      if (session.user) {
        session.user.id = token.id;
        session.user.discord = token.discord;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST }; 