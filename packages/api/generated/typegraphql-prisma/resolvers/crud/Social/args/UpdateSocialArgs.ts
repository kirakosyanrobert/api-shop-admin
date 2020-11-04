import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialUpdateInput } from "../../../inputs/SocialUpdateInput";
import { SocialWhereUniqueInput } from "../../../inputs/SocialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSocialArgs {
  @TypeGraphQL.Field(_type => SocialUpdateInput, { nullable: false })
  data!: SocialUpdateInput;

  @TypeGraphQL.Field(_type => SocialWhereUniqueInput, { nullable: false })
  where!: SocialWhereUniqueInput;
}
