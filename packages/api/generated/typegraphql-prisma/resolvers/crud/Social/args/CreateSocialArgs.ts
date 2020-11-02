import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialCreateInput } from "../../../inputs/SocialCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSocialArgs {
  @TypeGraphQL.Field(_type => SocialCreateInput, { nullable: false })
  data!: SocialCreateInput;
}
