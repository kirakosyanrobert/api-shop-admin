import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryListRelationFilter {
  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: CategoryWhereInput | undefined;
}
