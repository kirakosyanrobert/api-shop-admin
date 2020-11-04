import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductType } from "../../enums/ProductType";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class EnumProductTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ProductType, {
    nullable: true,
    description: undefined
  })
  set?: "BOOK" | "BAGS" | "GROCERY" | "MEDICINE" | "CLOTH" | "CLOTHING" | "FURNITURE" | "FURNITURE_TWO" | "MAKEUP" | "BAKERY" | undefined;
}
