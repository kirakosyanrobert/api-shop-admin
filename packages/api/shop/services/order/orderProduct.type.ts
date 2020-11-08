import { ObjectType, Field } from 'type-graphql';
import {Category, ProductType} from '@generated/type-graphql';

@ObjectType()
export default class OrderProduct {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  image: string;

  @Field(type => [Category])
  categories: Category[];

  @Field()
  price: number;

  @Field()
  weight: string;

  @Field()
  quantity: number;

  @Field()
  total: number;

  @Field(type => String)
  type: ProductType;
}
