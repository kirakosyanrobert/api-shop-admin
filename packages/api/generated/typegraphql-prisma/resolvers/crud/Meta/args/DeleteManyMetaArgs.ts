import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaWhereInput } from "../../../inputs/MetaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetaArgs {
  @TypeGraphQL.Field(_type => MetaWhereInput, { nullable: true })
  where?: MetaWhereInput | undefined;
}
