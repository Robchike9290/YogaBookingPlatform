import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export const authOptions: NextAuthOptions = {
  providers: [
    // Add your authentication providers here
    // For example:
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  callbacks: {
    async jwt({ token }: { token: JWT }) {
      return token
    },
    async session({ session, token }) {
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
}

