import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserUpdateWithoutAddressesDataInput } from "../inputs/UserUpdateWithoutAddressesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutAddressesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAddressesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutAddressesDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAddressesInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutAddressesInput;
}
