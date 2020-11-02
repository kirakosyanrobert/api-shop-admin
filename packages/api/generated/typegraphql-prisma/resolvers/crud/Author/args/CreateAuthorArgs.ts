import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AuthorCreateInput } from "../../../inputs/AuthorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorCreateInput, { nullable: false })
  data!: AuthorCreateInput;
}
