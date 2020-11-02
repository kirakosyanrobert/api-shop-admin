import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateWithoutCategoriesDataInput } from "../inputs/ProductUpdateWithoutCategoriesDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutCategoriesDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutCategoriesInput;
}
