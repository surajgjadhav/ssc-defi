import { AuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export const options:AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: {label: "Metamask", type: "text", placeholder: "metamask ID"}
            },
            async authorize(credentials) {
                console.log(credentials);
                // console.log(window?.ethereum?.isConnected());
                
                const user = { id: "42", name: "Srj", role: "admin" }

                if (credentials?.username === user.name) {
                    return user
                } else {
                    return null
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            // console.log('token: ', token);            
            return token
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            // console.log('session: ', session);
            return session
        },
    }
}