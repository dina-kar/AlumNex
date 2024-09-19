import type  { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export const options: NextAuthOptions ={
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your Username"
                },
                password: {
                    label: "Password:",
                    type: "text",
                    placeholder: "Your Password"
                }
            },
            async authorize(credentials){
                //This is where you want to retrieve user data
                const user = { id: "34", name: "test", password: "test"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        })

    ],
}
