import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutAddressesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;
}
