import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { UserCreateWithoutCardInput } from "../inputs/UserCreateWithoutCardInput";
import { UserUpdateWithoutCardDataInput } from "../inputs/UserUpdateWithoutCardDataInput";
import { UserUpsertWithoutCardInput } from "../inputs/UserUpsertWithoutCardInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutCardInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCardInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutCardInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCardDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutCardDataInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCardInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutCardInput | undefined;
}
