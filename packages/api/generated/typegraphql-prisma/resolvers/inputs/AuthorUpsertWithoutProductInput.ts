import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateWithoutProductInput } from "../inputs/AuthorCreateWithoutProductInput";
import { AuthorUpdateWithoutProductDataInput } from "../inputs/AuthorUpdateWithoutProductDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => AuthorUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AuthorUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: AuthorCreateWithoutProductInput;
}
