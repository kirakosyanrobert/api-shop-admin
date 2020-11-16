import { PrismaClient } from '../node_modules/.prisma/client'

export interface Context {
    prisma: PrismaClient;
}