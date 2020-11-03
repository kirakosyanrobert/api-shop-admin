import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CardCreateWithoutUserInput } from "../inputs/CardCreateWithoutUserInput";
import { CardScalarWhereInput } from "../inputs/CardScalarWhereInput";
import { CardUpdateManyWithWhereNestedInput } from "../inputs/CardUpdateManyWithWhereNestedInput";
import { CardUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CardUpdateWithWhereUniqueWithoutUserInput";
import { CardUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CardUpsertWithWhereUniqueWithoutUserInput";
import { CardWhereUniqueInput } from "../inputs/CardWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CardUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CardCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: CardCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: CardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: CardUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: CardUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: CardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CardUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: CardUpsertWithWhereUniqueWithoutUserInput[] | undefined;
}
