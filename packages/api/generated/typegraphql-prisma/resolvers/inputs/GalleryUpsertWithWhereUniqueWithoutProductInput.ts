import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { GalleryCreateWithoutProductInput } from "../inputs/GalleryCreateWithoutProductInput";
import { GalleryUpdateWithoutProductDataInput } from "../inputs/GalleryUpdateWithoutProductDataInput";
import { GalleryWhereUniqueInput } from "../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => GalleryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: GalleryWhereUniqueInput;

  @TypeGraphQL.Field(_type => GalleryUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: GalleryUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => GalleryCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: GalleryCreateWithoutProductInput;
}
