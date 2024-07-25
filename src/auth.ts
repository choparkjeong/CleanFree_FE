import NextAuth from "next-auth";
import KaKaoProvider from "next-auth/providers/kakao";
import { cookies } from "next/headers";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    KaKaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account?.providerAccountId;
        token.type = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.type = token.type;

      return { ...session, ...token };
    },
    async signIn({ account }) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              snsId: account?.providerAccountId,
            }),
          }
        );
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        if (data.success === true) {
          const authorization: any = res.headers.get("authorization");
          cookies().set("authorization", authorization);
          return true;
        } else {
          throw data.message;
        }
      } catch (error) {
        console.log(error);
        return true;
      }
    },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  trustHost: true,
});
