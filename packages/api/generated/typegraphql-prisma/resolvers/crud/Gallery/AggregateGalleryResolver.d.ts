import { GraphQLResolveInfo } from "graphql";
import { AggregateGalleryArgs } from "./args/AggregateGalleryArgs";
import { AggregateGallery } from "../../outputs/AggregateGallery";
export declare class AggregateGalleryResolver {
    aggregateGallery(ctx: any, info: GraphQLResolveInfo, args: AggregateGalleryArgs): Promise<AggregateGallery>;
}
