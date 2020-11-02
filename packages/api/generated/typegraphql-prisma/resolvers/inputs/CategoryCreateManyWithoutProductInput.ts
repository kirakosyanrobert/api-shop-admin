import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CategoryCreateWithoutProductInput } from "../inputs/CategoryCreateWithoutProductInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryCreateManyWithoutProductInput {
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
}
