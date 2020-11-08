import { GraphQLResolveInfo } from "graphql";
import { AggregateAddressArgs } from "./args/AggregateAddressArgs";
import { AggregateAddress } from "../../outputs/AggregateAddress";
export declare class AggregateAddressResolver {
    aggregateAddress(ctx: any, info: GraphQLResolveInfo, args: AggregateAddressArgs): Promise<AggregateAddress>;
}
