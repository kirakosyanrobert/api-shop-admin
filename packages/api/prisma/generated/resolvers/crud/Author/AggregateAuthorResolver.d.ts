import { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";
export declare class AggregateAuthorResolver {
    aggregateAuthor(ctx: any, info: GraphQLResolveInfo, args: AggregateAuthorArgs): Promise<AggregateAuthor>;
}
