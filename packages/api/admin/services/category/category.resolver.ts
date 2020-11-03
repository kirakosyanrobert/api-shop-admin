import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
import { PrismaClient } from "@prisma/client"

import { Category, CategoryCreateWithoutProductInput } from '../../../generated/typegraphql-prisma';
 
import search from '../../helpers/search';

const prisma = new PrismaClient() 

@Resolver()
export default class CategoryResolver {
  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', { nullable: true }) type?: string,
    @Arg('searchBy', { defaultValue: '' }) searchBy?: string
  ): Promise<Category[]> {
    let categories: Category[] = await prisma.category.findMany({});

    if (type) {
      categories = await categories.filter(category => category.type === type);
    }
    return await search(categories, ['name'], searchBy);
  }

  @Query(() => Category)
  async category(
    @Arg('id', type => ID) id: string
  ): Promise<Category | null> {
    const category = await prisma.category.findOne({
      where: { id: id }
    }); 
    return category;
  }

  @Mutation(() => Category, { description: 'Create Category' })
  async createCategory(
    @Arg('data') data: CategoryCreateWithoutProductInput
  ): Promise<Category> {
      const newCategory = await prisma.category.create({
        data: {
          title: data.title,
          slug: data.slug,
          type: data.type,
          icon: 'FruitsVegetable',
          product: {
            connect: { id: '921505fa-1442-4c61-8aa2-9937f2be2bc2' }
          }
        }
      }) 

      return await newCategory;
  }
}
