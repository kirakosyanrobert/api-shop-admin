import { GraphQLResolveInfo } from "graphql";
import { AggregateMetaArgs } from "./args/AggregateMetaArgs";
import { AggregateMeta } from "../../outputs/AggregateMeta";
export declare class AggregateMetaResolver {
    aggregateMeta(ctx: any, info: GraphQLResolveInfo, args: AggregateMetaArgs): Promise<AggregateMeta>;
}
