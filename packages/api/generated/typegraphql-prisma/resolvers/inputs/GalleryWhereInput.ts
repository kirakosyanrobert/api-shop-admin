import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryWhereInput {
  @TypeGraphQL.Field(_type => [GalleryWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: GalleryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: GalleryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: GalleryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  url?: StringFilter | undefined;

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
