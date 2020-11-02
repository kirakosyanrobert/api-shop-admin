import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutMetaInput } from "../inputs/ProductCreateWithoutMetaInput";
import { ProductUpdateWithoutMetaDataInput } from "../inputs/ProductUpdateWithoutMetaDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutMetaInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutMetaDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutMetaDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutMetaInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutMetaInput;
}
