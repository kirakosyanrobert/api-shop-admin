import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutAuthorInput } from "../inputs/ProductCreateWithoutAuthorInput";
import { ProductUpdateWithoutAuthorDataInput } from "../inputs/ProductUpdateWithoutAuthorDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutAuthorInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutAuthorDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutAuthorInput;
}
