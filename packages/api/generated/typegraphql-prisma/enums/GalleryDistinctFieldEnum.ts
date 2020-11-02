import * as TypeGraphQL from "type-graphql";

export enum GalleryDistinctFieldEnum {
  id = "id",
  url = "url",
  productId = "productId"
}
TypeGraphQL.registerEnumType(GalleryDistinctFieldEnum, {
  name: "GalleryDistinctFieldEnum",
  description: undefined,
});
