import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateWithoutCategoriesDataInput } from "../inputs/ProductUpdateWithoutCategoriesDataInput";
import { ProductUpsertWithoutCategoriesInput } from "../inputs/ProductUpsertWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpdateOneRequiredWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutCategoriesDataInput, {
    nullable: true,
    description: undefined
  })
  update?: ProductUpdateWithoutCategoriesDataInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutCategoriesInput, {
    nullable: true,
    description: undefined
  })
  upsert?: ProductUpsertWithoutCategoriesInput | undefined;
}
