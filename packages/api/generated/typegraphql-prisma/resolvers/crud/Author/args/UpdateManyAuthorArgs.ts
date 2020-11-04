import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AuthorUpdateManyMutationInput } from "../../../inputs/AuthorUpdateManyMutationInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAuthorArgs {
  @TypeGraphQL.Field(_type => AuthorUpdateManyMutationInput, { nullable: false })
  data!: AuthorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AuthorWhereInput, { nullable: true })
  where?: AuthorWhereInput | undefined;
}
