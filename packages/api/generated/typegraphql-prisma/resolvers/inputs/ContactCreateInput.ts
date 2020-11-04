import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateOneWithoutContactsInput } from "../inputs/UserCreateOneWithoutContactsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  number!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutContactsInput, {
    nullable: false,
    description: undefined
  })
  user!: UserCreateOneWithoutContactsInput;
}
