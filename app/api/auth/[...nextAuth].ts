import GoogleProvider from "next-auth/providers/google"
import { KyselyAdapter } from "@auth/kysely-adapter"
import NextAuth from "next-auth"
import { db } from "../../../db"

export default NextAuth({
  adapter: KyselyAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})