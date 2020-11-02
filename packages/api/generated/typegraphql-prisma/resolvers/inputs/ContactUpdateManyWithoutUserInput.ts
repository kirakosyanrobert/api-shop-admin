import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ContactCreateWithoutUserInput } from "../inputs/ContactCreateWithoutUserInput";
import { ContactScalarWhereInput } from "../inputs/ContactScalarWhereInput";
import { ContactUpdateManyWithWhereNestedInput } from "../inputs/ContactUpdateManyWithWhereNestedInput";
import { ContactUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ContactUpdateWithWhereUniqueWithoutUserInput";
import { ContactUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ContactUpsertWithWhereUniqueWithoutUserInput";
import { ContactWhereUniqueInput } from "../inputs/ContactWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ContactUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ContactCreateWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  create?: ContactCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: ContactWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: ContactWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: ContactWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: ContactWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  update?: ContactUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: ContactUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: ContactScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContactUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
    description: undefined
  })
  upsert?: ContactUpsertWithWhereUniqueWithoutUserInput[] | undefined;
}
