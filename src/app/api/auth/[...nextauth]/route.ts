import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  secret: process.env.NO_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    jwt({ token, user, account, profile, trigger }) {
      if( trigger === "signIn" && account?.provider === "github"){
        //TODO: gửi request => lấy data.. rồi set ngược vào session
      }
      return token;
    },
    session ( { session, token, user }) {
      if (token) {
        session.access_token = token.access_token;
        session.refresh_token = token.refresh_token;
        session.user = token.user;
      }
      return session;
    }
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
