import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryScalarWhereInput {
  @TypeGraphQL.Field(_type => [GalleryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: GalleryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: GalleryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: GalleryScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  productId?: StringFilter | undefined;
}
