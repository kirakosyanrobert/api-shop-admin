import * as TypeGraphQL from "type-graphql";

export enum AddressDistinctFieldEnum {
  id = "id",
  type = "type",
  title = "title",
  location = "location",
  userId = "userId"
}
TypeGraphQL.registerEnumType(AddressDistinctFieldEnum, {
  name: "AddressDistinctFieldEnum",
  description: undefined,
});
