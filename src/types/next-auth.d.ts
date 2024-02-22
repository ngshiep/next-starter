import "next-auth";
import "next-auth/jwt";

interface IUser {
  _id: string;
  username: string;
  email: string;
  address: string;
  isVerify: string;
  type: string;
  name: string;
  role: string;
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    access_token: string;
    refresh_token: string;
    user: IUser;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token: string;
    refresh_token: string;
    user: IUser;
  }
}