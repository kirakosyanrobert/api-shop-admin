import * as TypeGraphQL from "type-graphql";

export enum ProductDistinctFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  slug = "slug",
  title = "title",
  description = "description",
  unit = "unit",
  image = "image",
  price = "price",
  salePrice = "salePrice",
  discountInPercent = "discountInPercent",
  per_unit = "per_unit",
  quantity = "quantity",
  views = "views",
  sales = "sales",
  type = "type"
}
TypeGraphQL.registerEnumType(ProductDistinctFieldEnum, {
  name: "ProductDistinctFieldEnum",
  description: undefined,
});
