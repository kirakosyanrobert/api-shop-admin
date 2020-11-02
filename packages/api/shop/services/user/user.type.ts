import { ObjectType, Field, Int, ID } from 'type-graphql';
import Address from './address.type';
import Contact from './contact.type';
import Card from './card.type';


@ObjectType()
export default class User {
  @Field(type => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date; 

  @Field()
  email: string;

  @Field()
  name: string;
 
  @Field()
  image: string;

  @Field(type => [Address])
  addresses: Address[];

  @Field(type => [Contact])
  contacts: Contact[];

  @Field(type => [Card])
  card: Card[];

  password: string;
}




 