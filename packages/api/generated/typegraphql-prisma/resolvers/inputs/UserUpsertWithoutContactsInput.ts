import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutContactsInput } from "../inputs/UserCreateWithoutContactsInput";
import { UserUpdateWithoutContactsDataInput } from "../inputs/UserUpdateWithoutContactsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutContactsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutContactsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutContactsDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutContactsInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutContactsInput;
}
