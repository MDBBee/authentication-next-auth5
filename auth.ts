import NextAuth from 'next-auth';
import { prisma } from './prisma/prisma';
import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig,
});

//   providers: [],
