import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AddressWhereInput } from "../inputs/AddressWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AddressListRelationFilter {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: AddressWhereInput | undefined;

  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: AddressWhereInput | undefined;
}
