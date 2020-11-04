import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { MetaCreateWithoutProductInput } from "../inputs/MetaCreateWithoutProductInput";
import { MetaUpdateWithoutProductDataInput } from "../inputs/MetaUpdateWithoutProductDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MetaUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => MetaUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  update!: MetaUpdateWithoutProductDataInput;

  @TypeGraphQL.Field(_type => MetaCreateWithoutProductInput, {
    nullable: false,
    description: undefined
  })
  create!: MetaCreateWithoutProductInput;
}
