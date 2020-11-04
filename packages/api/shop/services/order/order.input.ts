import { InputType, Field, ID } from 'type-graphql';
import {ProductCreateInput} from '../../../generated/typegraphql-prisma'; 

@InputType()
export default class OrderInput {
  @Field(type => ID)
  id: string;
  @Field()
  address: string;

  @Field()
  contact: string;

  @Field()
  payment: string;

  @Field()
  schedule: string; 

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field(type => [ProductCreateInput])
  products: ProductCreateInput[];
}
