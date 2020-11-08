import { GraphQLResolveInfo } from "graphql";
import { AggregateSocialArgs } from "./args/AggregateSocialArgs";
import { AggregateSocial } from "../../outputs/AggregateSocial";
export declare class AggregateSocialResolver {
    aggregateSocial(ctx: any, info: GraphQLResolveInfo, args: AggregateSocialArgs): Promise<AggregateSocial>;
}
