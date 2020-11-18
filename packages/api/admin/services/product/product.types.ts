import { ObjectType, Field, Int, ArgsType } from 'type-graphql';
import { Product } from '@generated/type-graphql';

@ObjectType()
export class ProductsConnection {
  @Field(type => [Product])
  items: Product[];

  @Field(type => Int)
  totalCount: number;

  @Field()
  hasMore: boolean;
}

@ArgsType()
export class GetProductsArgs {
  @Field(type => Int, { defaultValue: 12 })
  limit: number;

  @Field(type => Int, { defaultValue: 0 })
  offset: number;

  @Field({ nullable: true })
  sortByPrice?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  searchText?: string;

  @Field({ nullable: true })
  category?: string;
}

