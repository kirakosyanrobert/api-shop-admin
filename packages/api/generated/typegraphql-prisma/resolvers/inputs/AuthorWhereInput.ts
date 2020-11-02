import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { SocialListRelationFilter } from "../inputs/SocialListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class AuthorWhereInput {
  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  avatar?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  bio?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  website?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SocialListRelationFilter, {
    nullable: true,
    description: undefined
  })
  socials?: SocialListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true,
    description: undefined
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | undefined;
}
