import * as TypeGraphQL from "type-graphql";

export enum CardDistinctFieldEnum {
  id = "id",
  type = "type",
  title = "title",
  cardType = "cardType",
  lastFourDigit = "lastFourDigit",
  userId = "userId"
}
TypeGraphQL.registerEnumType(CardDistinctFieldEnum, {
  name: "CardDistinctFieldEnum",
  description: undefined,
});
