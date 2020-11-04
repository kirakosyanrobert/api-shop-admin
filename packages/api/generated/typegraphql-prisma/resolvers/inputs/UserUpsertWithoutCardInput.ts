import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutCardInput } from "../inputs/UserCreateWithoutCardInput";
import { UserUpdateWithoutCardDataInput } from "../inputs/UserUpdateWithoutCardDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutCardInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCardDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutCardDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCardInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutCardInput;
}
