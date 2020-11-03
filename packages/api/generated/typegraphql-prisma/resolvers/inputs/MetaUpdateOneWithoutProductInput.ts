import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { MetaCreateWithoutProductInput } from "../inputs/MetaCreateWithoutProductInput";
import { MetaUpdateWithoutProductDataInput } from "../inputs/MetaUpdateWithoutProductDataInput";
import { MetaUpsertWithoutProductInput } from "../inputs/MetaUpsertWithoutProductInput";
import { MetaWhereUniqueInput } from "../inputs/MetaWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MetaUpdateOneWithoutProductInput {
  @TypeGraphQL.Field(_type => MetaCreateWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  create?: MetaCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => MetaWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: MetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MetaUpdateWithoutProductDataInput, {
    nullable: true,
    description: undefined
  })
  update?: MetaUpdateWithoutProductDataInput | undefined;

  @TypeGraphQL.Field(_type => MetaUpsertWithoutProductInput, {
    nullable: true,
    description: undefined
  })
  upsert?: MetaUpsertWithoutProductInput | undefined;
}
