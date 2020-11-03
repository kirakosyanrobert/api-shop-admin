import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { GalleryCreateWithoutProductInput } from "../inputs/GalleryCreateWithoutProductInput";
import { GalleryScalarWhereInput } from "../inputs/GalleryScalarWhereInput";
import { GalleryUpdateManyWithWhereNestedInput } from "../inputs/GalleryUpdateManyWithWhereNestedInput";
import { GalleryUpdateWithWhereUniqueWithoutProductInput } from "../inputs/GalleryUpdateWithWhereUniqueWithoutProductInput";
import { GalleryUpsertWithWhereUniqueWithoutProductInput } from "../inputs/GalleryUpsertWithWhereUniqueWithoutProductInput";
import { GalleryWhereUniqueInput } from "../inputs/GalleryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class GalleryUpdateManyWithoutProductInput {
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

  @TypeGraphQL.Field(_type => [GalleryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: GalleryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: GalleryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: GalleryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: GalleryUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: GalleryUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: GalleryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GalleryUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: GalleryUpsertWithWhereUniqueWithoutProductInput[] | undefined;
}
