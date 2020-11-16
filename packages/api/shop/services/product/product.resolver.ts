import { Resolver, Query, Arg, Int, Ctx } from 'type-graphql'

import { ProductResponse } from './product.types'
import { filterItems, getRelatedItems } from '../../helpers/filter'
 
import {
  Product,
  ProductType,
  ProductCreateOneWithoutCategoriesInput
 } from '../../../generated/type-graphql';
import { Context } from '../../../types';

    

@Resolver()
export class ProductResolver {
  @Query(() => ProductResponse)
  async products( 
    @Ctx() { prisma }: Context,
    @Arg('limit', (type) => Int, { defaultValue: 10 }) limit: number,
    @Arg('offset', (type) => Int, { defaultValue: 0 }) offset: number,
    @Arg('type', { nullable: true }) type?: string,
    @Arg('text', { nullable: true }) text?: string,
    @Arg('category', { nullable: true }) category?: string
  ): Promise<ProductResponse> {
    const products: Product[] = await prisma.product.findMany({
      include: {
        categories: true,
        meta: true,
        author: true,
        gallery: true 
      }
    });
    // if(products.length > 1) { 
    //   const newProduct = await prisma.product.create({
    //     data: {
    //       slug: 'limon',
    //       title: 'Limon',
    //       description: 'A Limon is the fruit of many plants....',
    //       unit: '0.5 lb',
    //       image: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
    //       price: 200,
    //       salePrice: 150,
    //       discountInPercent: 25,
    //       per_unit: 200,
    //       quantity: 1500,
    //       type: ProductType.GROCERY,
    //       categories: {
    //         connect: { id: '0f28b3ad-1deb-4ecd-be50-fa50471c5b55' }
    //       } 
    //     }
    //   })
    // } 
 
    // console.log('prisma all products:: ', products) 

    const total = products.length;
    const filteredData = filterItems(
      products,
      limit,
      offset, 
      text,
      type?.toLocaleUpperCase(),
      category
    );
    // console.log('API______API_____API', filteredData)
    return new ProductResponse({
      total: total,
      ...filteredData, 
    });
  }

  @Query(() => Product)
  async product(
    @Arg('slug', (type) => String) slug: string,
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
 
    //  console.log('prisma all products:: ', products) 
    return products.find((item) => item.slug === slug); 
  } 

  @Query(() => [Product], { description: 'Get the Related products' })
  async relatedProducts(
    @Ctx() { prisma }: Context,
    @Arg('slug', (slug) => String) slug: string,
    @Arg('type', { nullable: true }) type?: string
  ): Promise<any> {
    const products: Product[] = await prisma.product.findMany({
      include: {
        categories: true,
        meta: true,
        author: true,
        gallery: true 
      }
    });  

    const relatedItem = await getRelatedItems(type, slug, products);
    return relatedItem;
  }
}
 