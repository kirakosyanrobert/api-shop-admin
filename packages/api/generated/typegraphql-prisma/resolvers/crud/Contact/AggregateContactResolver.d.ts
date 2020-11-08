import { GraphQLResolveInfo } from "graphql";
import { AggregateContactArgs } from "./args/AggregateContactArgs";
import { AggregateContact } from "../../outputs/AggregateContact";
export declare class AggregateContactResolver {
    aggregateContact(ctx: any, info: GraphQLResolveInfo, args: AggregateContactArgs): Promise<AggregateContact>;
}
