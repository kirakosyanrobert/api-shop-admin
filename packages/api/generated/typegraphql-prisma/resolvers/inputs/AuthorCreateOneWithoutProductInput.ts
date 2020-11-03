import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateWithoutProductInput } from "../inputs/AuthorCreateWithoutProductInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorCreateOneWithoutProductInput {
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
}
