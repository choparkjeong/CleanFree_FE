import NextAuth from "next-auth";
import KaKaoProvider from "next-auth/providers/kakao";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

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
    async signIn({ account, user }) {
      // console.log("auth", user);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              snsId: user?.email,
            }),
          }
        );

        const data = await res.json();
        console.log(res.status);
        if (res.status === 200) {
          const authorization: any = res.headers.get("authorization");
          cookies().set("authorization", authorization, {
            maxAge: 30 * 24 * 60 * 60,
          });
          return true;
        } else if (res.status === 201) {
          return true;
        } else {
          throw data.message;
        }
      } catch (error) {
        return true;
      }
    },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  trustHost: true,
});
