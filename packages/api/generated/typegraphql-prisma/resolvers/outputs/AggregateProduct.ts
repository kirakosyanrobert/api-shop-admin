import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateProduct {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => ProductAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: ProductAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProductSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: ProductSumAggregate | null;

  @TypeGraphQL.Field(_type => ProductMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: ProductMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: ProductMaxAggregate | null;
}
