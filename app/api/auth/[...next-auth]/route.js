import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// We provide the toptions object in NextAuth
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    // Add some functions
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})

export { handler as GET, handler as POST}