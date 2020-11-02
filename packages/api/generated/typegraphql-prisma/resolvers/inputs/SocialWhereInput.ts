import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialWhereInput {
  @TypeGraphQL.Field(_type => [SocialWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: SocialWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: SocialWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: SocialWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  media?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  profileLink?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorRelationFilter, {
    nullable: true,
    description: undefined
  })
  author?: AuthorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  authorId?: StringFilter | undefined;
}
