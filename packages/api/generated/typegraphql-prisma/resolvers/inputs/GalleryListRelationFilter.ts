import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { GalleryWhereInput } from "../inputs/GalleryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryListRelationFilter {
  @TypeGraphQL.Field(_type => GalleryWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: GalleryWhereInput | undefined;

  @TypeGraphQL.Field(_type => GalleryWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: GalleryWhereInput | undefined;

  @TypeGraphQL.Field(_type => GalleryWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: GalleryWhereInput | undefined;
}
