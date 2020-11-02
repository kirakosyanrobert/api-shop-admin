import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutGalleryInput } from "../inputs/ProductCreateWithoutGalleryInput";
import { ProductUpdateWithoutGalleryDataInput } from "../inputs/ProductUpdateWithoutGalleryDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductUpsertWithoutGalleryInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutGalleryDataInput, {
    nullable: false,
    description: undefined
  })
  update!: ProductUpdateWithoutGalleryDataInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutGalleryInput, {
    nullable: false,
    description: undefined
  })
  create!: ProductCreateWithoutGalleryInput;
}
