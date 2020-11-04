import * as TypeGraphQL from "type-graphql";

export enum CategoryDistinctFieldEnum {
  id = "id",
  title = "title",
  type = "type",
  icon = "icon",
  slug = "slug",
  itemCount = "itemCount",
  productId = "productId"
}
TypeGraphQL.registerEnumType(CategoryDistinctFieldEnum, {
  name: "CategoryDistinctFieldEnum",
  description: undefined,
});
