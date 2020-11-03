import * as TypeGraphQL from "type-graphql";

export enum ContactDistinctFieldEnum {
  id = "id",
  type = "type",
  number = "number",
  userId = "userId"
}
TypeGraphQL.registerEnumType(ContactDistinctFieldEnum, {
  name: "ContactDistinctFieldEnum",
  description: undefined,
});
