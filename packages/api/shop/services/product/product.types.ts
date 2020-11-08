import { ObjectType, InputType, Field } from 'type-graphql';

import PaginatedResponse from '../../helpers/PaginatedResponse';
import { Product, ProductType } from '@generated/type-graphql'


// TODO: Need to change this in next update

// we need to create a temporary class for the abstract, generic class "instance"
@ObjectType()
export class ProductResponse extends PaginatedResponse(Product) {
  // simple helper for creating new instances easily
  constructor(productResponse: ProductResponse) {
    super();
    Object.assign(this, productResponse);
  }
 
  // you can add more fields here if you need
}
  
@InputType()
export class ProductSearchInput {
  @Field({ nullable: true })
  id?: number;

  @Field()
  type: ProductType;

  @Field({ nullable: true })
  category?: string;

  @Field({ defaultValue: 0 })
  offset: number;

  @Field({ defaultValue: 10 })
  limit: number;
}