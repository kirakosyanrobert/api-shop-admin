import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { MetaUpdateManyMutationInput } from "../../../inputs/MetaUpdateManyMutationInput";
import { MetaWhereInput } from "../../../inputs/MetaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetaArgs {
  @TypeGraphQL.Field(_type => MetaUpdateManyMutationInput, { nullable: false })
  data!: MetaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MetaWhereInput, { nullable: true })
  where?: MetaWhereInput | undefined;
}
