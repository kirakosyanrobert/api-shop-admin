import { Resolver, Query, Arg, Int, ID } from 'type-graphql';
import { Category } from '../../../generated/typegraphql-prisma';
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

@Resolver()
export class CategoryResolver {

  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', type => String) type: string
  ): Promise<Category[]> {
    const categories: Category[] = await prisma.category.findMany({});
    return await categories.filter(item => item.type === type);
    // return await this.items;
  }

  @Query(() => Category)
  async category(
    @Arg('id', type => ID) id: string
  ): Promise<Category | undefined> {
    const categories: Category[] = await prisma.category.findMany({});
    return await categories.find(item => item.id === id);
  }
}
