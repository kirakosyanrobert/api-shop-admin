import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductType } from "../../enums/ProductType";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class NestedEnumProductTypeFilter {
  @TypeGraphQL.Field(_type => ProductType, {
    nullable: true,
    description: undefined
  })
  equals?: "BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY" | undefined;

  @TypeGraphQL.Field(_type => [ProductType], {
    nullable: true,
    description: undefined
  })
  in?: Array<"BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY"> | undefined;

  @TypeGraphQL.Field(_type => [ProductType], {
    nullable: true,
    description: undefined
  })
  notIn?: Array<"BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumProductTypeFilter, {
    nullable: true,
    description: undefined
  })
  not?: NestedEnumProductTypeFilter | undefined;
}
