import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductCreateWithoutGalleryInput } from "../inputs/ProductCreateWithoutGalleryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ProductCreateOneWithoutGalleryInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutGalleryInput, {
    nullable: true,
    description: undefined
  })
  create?: ProductCreateWithoutGalleryInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: ProductWhereUniqueInput | undefined;
}
