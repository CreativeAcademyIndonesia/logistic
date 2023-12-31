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
            if(username != 'Hasfi' || password != '1234'){
              throw new Error('Username tidak terdaftar')
            }

            return { 
                username : 'Hasfi',
                password : '1234'
            }
          }
        })
    ], 
    callbacks: {
      async signIn({credentials }) {
        const isAllowedToSignIn = true
        if (isAllowedToSignIn) {
          return true
        } else {
          // Return false to display a default error message
          return false
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      }
    },

    pages: {
      signIn: "/auth/login"
    },
}

// export default NextAuth(authOptions)