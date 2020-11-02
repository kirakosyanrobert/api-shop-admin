import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateWithoutProductInput } from "../inputs/AuthorCreateWithoutProductInput";
import { AuthorUpdateWithoutProductDataInput } from "../inputs/AuthorUpdateWithoutProductDataInput";
import { AuthorUpsertWithoutProductInput } from "../inputs/AuthorUpsertWithoutProductInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorUpdateOneWithoutProductInput {
  @TypeGraphQL.Field(_type => AuthorCreateWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  create?: AuthorCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateWithoutProductDataInput, {
    nullable: true,
    description: undefined
  })
  update?: AuthorUpdateWithoutProductDataInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpsertWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  upsert?: AuthorUpsertWithoutProductInput | undefined;
}
