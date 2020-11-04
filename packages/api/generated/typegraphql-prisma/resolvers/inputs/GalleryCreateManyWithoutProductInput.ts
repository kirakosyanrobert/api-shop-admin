import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { GalleryCreateWithoutProductInput } from "../inputs/GalleryCreateWithoutProductInput";
import { GalleryWhereUniqueInput } from "../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryCreateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [GalleryCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: GalleryCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: GalleryWhereUniqueInput[] | undefined;
}
