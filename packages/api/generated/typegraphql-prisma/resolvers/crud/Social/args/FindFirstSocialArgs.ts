import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { SocialOrderByInput } from "../../../inputs/SocialOrderByInput";
import { SocialWhereInput } from "../../../inputs/SocialWhereInput";
import { SocialWhereUniqueInput } from "../../../inputs/SocialWhereUniqueInput";
import { SocialDistinctFieldEnum } from "../../../../enums/SocialDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSocialArgs {
  @TypeGraphQL.Field(_type => SocialWhereInput, { nullable: true })
  where?: SocialWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SocialOrderByInput], { nullable: true })
  orderBy?: SocialOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SocialWhereUniqueInput, { nullable: true })
  cursor?: SocialWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SocialDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "media" | "profileLink" | "authorId"> | undefined;
}
