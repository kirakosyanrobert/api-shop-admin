import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, { nullable: false })
  where!: AuthorWhereUniqueInput;
}
