import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { GalleryUpdateWithoutProductDataInput } from "../inputs/GalleryUpdateWithoutProductDataInput";
import { GalleryWhereUniqueInput } from "../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => GalleryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: GalleryWhereUniqueInput;

  @TypeGraphQL.Field(_type => GalleryUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: GalleryUpdateWithoutProductDataInput;
}
