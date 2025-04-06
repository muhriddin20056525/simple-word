import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import { connectToDB } from "./connectDb";
import UserModel from "@/models/User";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXT_AUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      await connectToDB();

      let existingUser = await UserModel.findOne({ email: user.email });

      if (!existingUser) {
        existingUser = await UserModel.create({
          name: user.name,
          email: user.email,
          profileImage: user.image,
        });
      }

      user.id = existingUser._id.toString();

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
