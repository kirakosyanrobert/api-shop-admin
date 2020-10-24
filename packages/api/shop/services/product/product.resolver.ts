import { Resolver, Query, Arg, Int, ObjectType } from 'type-graphql';
import { createProductSamples } from './product.sample';
import Product, { ProductResponse } from './product.type';
import { filterItems, getRelatedItems } from '../../helpers/filter';

@Resolver()
export class ProductResolver {

  @Query(() => ProductResponse)
  async products(
    @Arg('limit', (type) => Int, { defaultValue: 10 }) limit: number,
    @Arg('offset', (type) => Int, { defaultValue: 0 }) offset: number,
    @Arg('type', { nullable: true }) type?: string,
    @Arg('text', { nullable: true }) text?: string,
    @Arg('category', { nullable: true }) category?: string
  ): Promise<ProductResponse> {
    const items: Product[] = await createProductSamples();
    const total = items.length;
    const filteredData = filterItems(
      items,
      limit,
      offset,
      text,
      type,
      category
    );
    return new ProductResponse({
      total: total,
      ...filteredData,
    });
  }

  @Query(() => Product)
  async product(
    @Arg('slug', (type) => String) slug: string
  ): Promise<Product | undefined> {
    const items: Product[] = await createProductSamples();
    return await items.find((item) => item.slug === slug);
  }

  @Query(() => [Product], { description: 'Get the Related products' })
  async relatedProducts(
    @Arg('slug', (slug) => String) slug: string,
    @Arg('type', { nullable: true }) type?: string
  ): Promise<any> {
    const items: Product[] = await createProductSamples();
    const relatedItem = await getRelatedItems(type, slug, items);
    return relatedItem;
  }
}
 