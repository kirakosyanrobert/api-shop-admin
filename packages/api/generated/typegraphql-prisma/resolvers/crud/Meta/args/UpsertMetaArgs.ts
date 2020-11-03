import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaCreateInput } from "../../../inputs/MetaCreateInput";
import { MetaUpdateInput } from "../../../inputs/MetaUpdateInput";
import { MetaWhereUniqueInput } from "../../../inputs/MetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetaArgs {
  @TypeGraphQL.Field(_type => MetaWhereUniqueInput, { nullable: false })
  where!: MetaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MetaCreateInput, { nullable: false })
  create!: MetaCreateInput;

  @TypeGraphQL.Field(_type => MetaUpdateInput, { nullable: false })
  update!: MetaUpdateInput;
}
