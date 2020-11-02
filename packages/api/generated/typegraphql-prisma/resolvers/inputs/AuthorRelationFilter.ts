import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorWhereInput } from "../inputs/AuthorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorRelationFilter {
  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: AuthorWhereInput | undefined;
}
