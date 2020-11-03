import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CategoryUpdateWithoutProductDataInput } from "../inputs/CategoryUpdateWithoutProductDataInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProductDataInput, {
    nullable: false,
    description: undefined
  })
  data!: CategoryUpdateWithoutProductDataInput;
}
