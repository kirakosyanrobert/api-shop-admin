import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialUpdateManyMutationInput } from "../../../inputs/SocialUpdateManyMutationInput";
import { SocialWhereInput } from "../../../inputs/SocialWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySocialArgs {
  @TypeGraphQL.Field(_type => SocialUpdateManyMutationInput, { nullable: false })
  data!: SocialUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SocialWhereInput, { nullable: true })
  where?: SocialWhereInput | undefined;
}
