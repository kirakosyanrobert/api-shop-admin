import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialCreateInput } from "../../../inputs/SocialCreateInput";
import { SocialUpdateInput } from "../../../inputs/SocialUpdateInput";
import { SocialWhereUniqueInput } from "../../../inputs/SocialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSocialArgs {
  @TypeGraphQL.Field(_type => SocialWhereUniqueInput, { nullable: false })
  where!: SocialWhereUniqueInput;

  @TypeGraphQL.Field(_type => SocialCreateInput, { nullable: false })
  create!: SocialCreateInput;

  @TypeGraphQL.Field(_type => SocialUpdateInput, { nullable: false })
  update!: SocialUpdateInput;
}
