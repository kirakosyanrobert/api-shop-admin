import { Resolver, Query, Arg, ID, Ctx } from 'type-graphql';

import { Category } from '@generated/type-graphql';
import { Context } from '../../../types';
 
@Resolver()
export class CategoryResolver {

  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(
    @Ctx() { prisma }: Context,
    @Arg('type', type => String) type: string
  ): Promise<Category[]> {
    const categories: Category[] = await prisma.category.findMany({});
    // if(categories.length === 3) {
    //   const newCat = await prisma.category.create({
    //     data: {
    //       title: 'Fruits & Vegetables',
    //       slug: 'fruits-and-vegetables',
    //       type: 'GROCERY',
    //       icon: 'FruitsVegetable',
    //       product: {
    //         connect: { id: '921505fa-1442-4c61-8aa2-9937f2be2bc2' }
    //       }
    //     }
    //   }) 
    // }
      //  console.log('Prisma All Categories :: ', categories)

    return categories.filter(item => item.type === type);
    // return await this.items;
  }

  @Query(() => Category)
  async category(
    @Ctx() { prisma }: Context,
    @Arg('id', type => ID) id: string
  ): Promise<Category | undefined> {
    const categories: Category[] = await prisma.category.findMany({});
    return await categories.find(item => item.id === id);
  }
}
