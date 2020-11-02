import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;
}
