import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialWhereUniqueInput } from "../../../inputs/SocialWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSocialArgs {
  @TypeGraphQL.Field(_type => SocialWhereUniqueInput, { nullable: false })
  where!: SocialWhereUniqueInput;
}
