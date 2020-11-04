import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CategoryCreateWithoutProductInput } from "../inputs/CategoryCreateWithoutProductInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereNestedInput } from "../inputs/CategoryUpdateManyWithWhereNestedInput";
import { CategoryUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutProductInput";
import { CategoryUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutProductInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  create?: CategoryCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  update?: CategoryUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CategoryUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutProductInput[] | undefined;
}
