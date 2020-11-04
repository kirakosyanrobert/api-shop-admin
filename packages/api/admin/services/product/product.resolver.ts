import { Resolver, Query, Arg, Args, Mutation, Ctx } from 'type-graphql';

import { Product, ProductCreateInput } from '../../../generated/typegraphql-prisma';
import { ProductsConnection, GetProductsArgs } from './product.types';
 
import search from '../../helpers/search';
import shuffle from '../../helpers/shuffle';
import { sortByHighestNumber, sortByLowestNumber } from '../../helpers/sorts';
import { Context } from '../../../types';


@Resolver()
export default class ProductResolver {
  @Query((returns) => ProductsConnection, { description: 'Get all the products' })
  async products(
    @Ctx() { prisma }: Context,
    @Args()
    { limit, offset, sortByPrice, type, searchText, category }: GetProductsArgs
  ): Promise<ProductsConnection> {
    let products = await prisma.product.findMany({
      include: {
        categories: true,
        meta: true,
        author: true,
        gallery: true 
      }
    }); 
 
    if (category) {
      products = products.filter((product) =>
        product.categories.find(
          (category_item) => category_item.slug === category
        )
      );
    }

    if (type) {
      products = products.filter((product) => product.type === type);
    }

    if (sortByPrice) {
      if (sortByPrice === 'highestToLowest') {
        products = sortByHighestNumber(products, 'price');
      }  
      if (sortByPrice === 'lowestToHighest') {
        products = sortByLowestNumber(products, 'price');
      }
    } else {
      products = shuffle(products); 
    }

    // return await products.slice(0, limit);
    products = await search(products, ['name'], searchText);
    const hasMore = products.length > offset + limit;

    return {
      items: products.slice(offset, offset + limit),
      totalCount: products.length,
      hasMore,
    };
  }

  @Query(() => Product)
  async product(
    @Arg('slug') slug: string,
    @Ctx() { prisma }: Context,
  ): Promise<Product | undefined> {
    const products: Product[] = await prisma.product.findMany({
      include: {
        categories: true,
        meta: true,
        author: true,
        gallery: true 
      }
    });  
    return products.find((item) => item.slug === slug);
  }

  @Mutation(() => Product, { description: 'Create Category' })
  async createProduct(
    @Ctx() { prisma }: Context,
    @Arg('data') data: ProductCreateInput
  ): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: data
    })

    return newProduct
  }
}
