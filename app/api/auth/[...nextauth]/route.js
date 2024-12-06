import NextAuth from "next-auth"
import connectDb from "../../../../db/ConnectionDb"

import { useSession, signIn, signOut } from 'next-auth/react'

import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

export const authOptions=  {
  secret:process.env.NEXTAUTH_SECRET,

  providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        id:'credentials',
        
        credentials: {
          email: { label: "Email", type: "text", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" }
        },
       
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ]
}
const handler = NextAuth(authOptions
)

export { handler as GET, handler as POST }