import * as TypeGraphQL from "type-graphql";

export enum ProductType {
  BOOK = "BOOK",
  BAGS = "BAGS",
  GROCERY = "GROCERY",
  MEDICINE = "MEDICINE",
  CLOTH = "CLOTH",
  CLOTHING = "CLOTHING",
  FURNITURE = "FURNITURE",
  FURNITURE_TWO = "FURNITURE_TWO",
  MAKEUP = "MAKEUP",
  BAKERY = "BAKERY"
}
TypeGraphQL.registerEnumType(ProductType, {
  name: "ProductType",
  description: undefined,
});
