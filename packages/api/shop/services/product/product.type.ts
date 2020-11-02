import { ObjectType } from 'type-graphql';
import PaginatedResponse from '../../helpers/paginated-response';
import { Product } from '../../../generated/typegraphql-prisma'


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
 