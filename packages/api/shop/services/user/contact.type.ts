import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export default class Contact {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  number: string;
}
 