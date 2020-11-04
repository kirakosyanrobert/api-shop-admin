import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateWithoutSocialsInput } from "../inputs/AuthorCreateWithoutSocialsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorCreateOneWithoutSocialsInput {
  @TypeGraphQL.Field(_type => AuthorCreateWithoutSocialsInput, {
    nullable: true,
    description: undefined
  })
  create?: AuthorCreateWithoutSocialsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AuthorWhereUniqueInput | undefined;
}
