import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { CardAvgAggregate } from "../outputs/CardAvgAggregate";
import { CardMaxAggregate } from "../outputs/CardMaxAggregate";
import { CardMinAggregate } from "../outputs/CardMinAggregate";
import { CardSumAggregate } from "../outputs/CardSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class AggregateCard {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count!: number;

  @TypeGraphQL.Field(_type => CardAvgAggregate, {
    nullable: true,
    description: undefined
  })
  avg!: CardAvgAggregate | null;

  @TypeGraphQL.Field(_type => CardSumAggregate, {
    nullable: true,
    description: undefined
  })
  sum!: CardSumAggregate | null;

  @TypeGraphQL.Field(_type => CardMinAggregate, {
    nullable: true,
    description: undefined
  })
  min!: CardMinAggregate | null;

  @TypeGraphQL.Field(_type => CardMaxAggregate, {
    nullable: true,
    description: undefined
  })
  max!: CardMaxAggregate | null;
}
