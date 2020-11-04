import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialWhereInput } from "../../../inputs/SocialWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySocialArgs {
  @TypeGraphQL.Field(_type => SocialWhereInput, { nullable: true })
  where?: SocialWhereInput | undefined;
}
