import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { SocialCreateWithoutAuthorInput } from "../inputs/SocialCreateWithoutAuthorInput";
import { SocialScalarWhereInput } from "../inputs/SocialScalarWhereInput";
import { SocialUpdateManyWithWhereNestedInput } from "../inputs/SocialUpdateManyWithWhereNestedInput";
import { SocialUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/SocialUpdateWithWhereUniqueWithoutAuthorInput";
import { SocialUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/SocialUpsertWithWhereUniqueWithoutAuthorInput";
import { SocialWhereUniqueInput } from "../inputs/SocialWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class SocialUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SocialCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  create?: SocialCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: SocialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: SocialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: SocialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: SocialWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  update?: SocialUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: SocialUpdateManyWithWhereNestedInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: SocialScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SocialUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: SocialUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
}
