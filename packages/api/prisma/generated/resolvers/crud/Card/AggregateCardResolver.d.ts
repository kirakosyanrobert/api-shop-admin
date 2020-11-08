import { GraphQLResolveInfo } from "graphql";
import { AggregateCardArgs } from "./args/AggregateCardArgs";
import { AggregateCard } from "../../outputs/AggregateCard";
export declare class AggregateCardResolver {
    aggregateCard(ctx: any, info: GraphQLResolveInfo, args: AggregateCardArgs): Promise<AggregateCard>;
}
