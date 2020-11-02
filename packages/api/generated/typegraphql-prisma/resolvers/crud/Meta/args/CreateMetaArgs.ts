import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaCreateInput } from "../../../inputs/MetaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetaArgs {
  @TypeGraphQL.Field(_type => MetaCreateInput, { nullable: false })
  data!: MetaCreateInput;
}
