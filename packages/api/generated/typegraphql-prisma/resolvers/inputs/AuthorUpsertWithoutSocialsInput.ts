import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorCreateWithoutSocialsInput } from "../inputs/AuthorCreateWithoutSocialsInput";
import { AuthorUpdateWithoutSocialsDataInput } from "../inputs/AuthorUpdateWithoutSocialsDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorUpsertWithoutSocialsInput {
  @TypeGraphQL.Field(_type => AuthorUpdateWithoutSocialsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AuthorUpdateWithoutSocialsDataInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutSocialsInput, {
    nullable: false,
    description: undefined
  })
  create!: AuthorCreateWithoutSocialsInput;
}
