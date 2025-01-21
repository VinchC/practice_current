https://www.youtube.com/watch?v=M8vyKYDotTc&ab_channel=Laminutedecode
7'19 => Google

## NextAuth.js

Create Next project
npx create-next-app@latest
npm run dev

reinit index page /

Install NextAuth
npm i next-auth

## Create file /lib/authOptions.ts

import {NextAuthOptions} from "next-auth" // to implement connection options (GitHub, Google etc.)

// import providers
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

// declare variable which will define providers with respective ids and secrets
export const authOptions: NextAuthOptions = {
providers: [
GitHubProvider({
clientId: "",
clientSecret: "",
}),
GoogleProvider({
clientId: "",
clientSecret: "",
}),
],
};

## Get id and secret from GitHub

=> https://github.com/settings/profile
=> https://github.com/settings/apps
=> https://github.com/settings/developers
=> New OAuth App :

- Application name
- Home page URL (http://localhost:3000 or landing page)
- Authorization callback URL : http://localhost:3000/api/auth/callback/github => allows use of authorization
  => get Client ID which has just been created
  => generate Client secret

Create .env file with variables :

- GITHUB_ID=clientid // without quotes
- GITHUB_SECRET=clientsecret
- GOOGLE_ID=clientid // without quotes
- GOOGLE_SECRET=clientsecret

## Get id and secret from Google

To be done later - works the same way as GitHub

## Update file /lib/authOptions.ts

export const authOptions: NextAuthOptions = {
providers: [
GitHubProvider({
clientId: process.env.GITHUB_ID as string, // precise as string otherwise the typeis not accepted
clientSecret: process.env.GITHUB_SECRET as string, // cf. supra
}),
GoogleProvider({
clientId: "",
clientSecret: "",
}),
],
};

## Create authentification route

Create /app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

## Create Provider which will send authentication data to all pages

Create lib/SessionWrapper.tsx

"use client"
import {SessionProvider} from "next.auth/react"

const SessionWrapper = ({children}: {children: React.ReactNode}) => {
return <SessionProvider>{children}</SessionProvider>
}

export default SessionWrapper;

## Implement SessionProvider on all pages

In /app/layout.tsx (highest level)

<SessionWrapper>
  <html lang="en">
  </html>
</SessionWrapper>

====> Back is done!!!!

## Implement connection methods in client

In /app/page.tsx

"use client";

import { signIn } from "next-auth/react";

export default function Home() {
return (
<>

<div className="max-w-[1000px] h-screen mx-auto flex justify-center items-center flex-col gap-2">
<h1 className="text-8xl uppercase font-black text-center mb-4">
Nextauth
</h1>
<div className="flex items-center gap-2">
<button
onClick={() => signIn("google")}
className="bg-gray-300 hover:bg-gray-500 rounded-md p-3" >
Se connecter avec Google
</button>
<button
onClick={() => signIn("github")}
className="bg-gray-300 hover:bg-gray-500 rounded-md p-3" >
Se connecter avec Github
</button>
</div>
</div>
</>
);
}

## Implement a session with cookie

In /app/page.tsx

import { signIn, useSession } from "next-auth/react";

export default function Home() {

const {data:session} = useSession();

console.log(session);

return (

        {session ? <p>Bienvenue {session?.user?.name}</p> : <p>Bienvenue</p>}
        <div className="flex items-center gap-2">
          {/* <button
            onClick={() => signIn("google")}
            className="bg-gray-300 hover:bg-gray-500 text-black rounded-md p-3"
          >
            Se connecter avec Google
          </button> */}
          {session ? (
            <button className="bg-gray-300 hover:bg-gray-500 text-black rounded-md p-3">
              Mon compte
            </button>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="bg-gray-300 hover:bg-gray-500 text-black rounded-md p-3"
            >
              Se connecter avec Github
            </button>
          )}
        </div>

)}
