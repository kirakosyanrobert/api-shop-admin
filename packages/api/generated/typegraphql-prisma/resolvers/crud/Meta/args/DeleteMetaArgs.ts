import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaWhereUniqueInput } from "../../../inputs/MetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMetaArgs {
  @TypeGraphQL.Field(_type => MetaWhereUniqueInput, { nullable: false })
  where!: MetaWhereUniqueInput;
}
