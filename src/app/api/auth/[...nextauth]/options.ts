import { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

import { login } from '@/lib/data';

export const options: NextAuthOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID as string,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'E-mail',
          type: 'text',
        },
        password: {
          label: 'Password: ',
          type: 'password',
        },
        remember: { name: 'Remember', type: 'checkbox' },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        // const rememberMe = credentials?.remember === 'true';

        try {
          const response = await login(email, password);
          if (response.status === 200 && response.data.success) {
            const me = response.data.value;

            return {
              id: me.userId,
              email: me.email,
              name: me.fullName,
              token: me.token,
            };
          }
          throw new Error(response.data.errorMessage);
        } catch (error: any) {
          throw Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session && token) {
        session.user.id = token.sub ?? '';
        session.user.token = token.token as string;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 3 * 60 * 60, // 3 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.JWT_SECRET,
};
