import env from '~/env'

import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = new PrismaClient()

if (env.VERCEL_ENV !== 'production') globalForPrisma.prisma = prisma
