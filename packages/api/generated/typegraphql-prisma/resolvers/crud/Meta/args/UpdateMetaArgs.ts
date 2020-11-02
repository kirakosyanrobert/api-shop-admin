import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaUpdateInput } from "../../../inputs/MetaUpdateInput";
import { MetaWhereUniqueInput } from "../../../inputs/MetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetaArgs {
  @TypeGraphQL.Field(_type => MetaUpdateInput, { nullable: false })
  data!: MetaUpdateInput;

  @TypeGraphQL.Field(_type => MetaWhereUniqueInput, { nullable: false })
  where!: MetaWhereUniqueInput;
}
