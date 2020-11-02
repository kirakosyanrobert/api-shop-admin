import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutContactsInput } from "../inputs/UserCreateWithoutContactsInput";
import { UserUpdateWithoutContactsDataInput } from "../inputs/UserUpdateWithoutContactsDataInput";
import { UserUpsertWithoutContactsInput } from "../inputs/UserUpsertWithoutContactsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutContactsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutContactsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutContactsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutContactsDataInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutContactsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutContactsInput | undefined;
}
