import * as TypeGraphQL from "type-graphql";

export enum AuthorDistinctFieldEnum {
  id = "id",
  name = "name",
  avatar = "avatar",
  bio = "bio",
  email = "email",
  website = "website",
  productId = "productId"
}
TypeGraphQL.registerEnumType(AuthorDistinctFieldEnum, {
  name: "AuthorDistinctFieldEnum",
  description: undefined,
});
