import { DefaultSession, DefaultUser } from "next-auth";

// Define the Discord interface
interface Discord {
  id: string;
  username?: string;
}

// Extend the User interface
declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    discord?: Discord;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      discord?: Discord;
    } & DefaultSession["user"];
  }
}

// Extend the JWT interface
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    discord?: Discord;
  }
} 