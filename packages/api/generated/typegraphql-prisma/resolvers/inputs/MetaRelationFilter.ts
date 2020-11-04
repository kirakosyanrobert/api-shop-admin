import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { MetaWhereInput } from "../inputs/MetaWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class MetaRelationFilter {
  @TypeGraphQL.Field(_type => MetaWhereInput, {
    nullable: true,
    description: undefined
  })
  is?: MetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MetaWhereInput, {
    nullable: true,
    description: undefined
  })
  isNot?: MetaWhereInput | undefined;
}
