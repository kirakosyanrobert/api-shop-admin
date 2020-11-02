import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserUpdateWithoutAddressesDataInput } from "../inputs/UserUpdateWithoutAddressesDataInput";
import { UserUpsertWithoutAddressesInput } from "../inputs/UserUpsertWithoutAddressesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutAddressesInput {
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

  @TypeGraphQL.Field(_type => UserUpdateWithoutAddressesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutAddressesDataInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAddressesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutAddressesInput | undefined;
}
