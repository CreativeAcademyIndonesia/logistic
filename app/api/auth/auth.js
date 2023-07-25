// import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session : {
        stategy : "jwt"
    }, 
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "username" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const {username, password} = credentials
            if(username != 'agus@gmail.com' || password != '1234'){
                throw new Error('Username tidak terdaftar')
            }

            return { 
                username : 'agus',
                password : '1234'
            }
          }
        })
    ], 
    pages: {
      signIn: "/auth/login",
    },
}

// // export default NextAuth(authOptions)

// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Sign in",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "example@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = { id: "1", name: "Admin", email: "admin@admin.com" };
//         return user;
//       },
//     }),
//   ],
// };
