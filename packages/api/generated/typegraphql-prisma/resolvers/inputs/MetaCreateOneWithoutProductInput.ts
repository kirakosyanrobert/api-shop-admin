import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { MetaCreateWithoutProductInput } from "../inputs/MetaCreateWithoutProductInput";
import { MetaWhereUniqueInput } from "../inputs/MetaWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MetaCreateOneWithoutProductInput {
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
}
