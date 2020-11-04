import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProductOrderByInput } from "../../../inputs/ProductOrderByInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
import { ProductDistinctFieldEnum } from "../../../../enums/ProductDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, { nullable: true })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByInput], { nullable: true })
  orderBy?: ProductOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, { nullable: true })
  cursor?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "slug" | "title" | "description" | "unit" | "image" | "price" | "salePrice" | "discountInPercent" | "per_unit" | "quantity" | "views" | "sales" | "type"> | undefined;
}
