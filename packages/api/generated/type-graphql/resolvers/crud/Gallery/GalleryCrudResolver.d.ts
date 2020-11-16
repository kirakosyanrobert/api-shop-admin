import { GraphQLResolveInfo } from "graphql";
import { AggregateGalleryArgs } from "./args/AggregateGalleryArgs";
import { CreateGalleryArgs } from "./args/CreateGalleryArgs";
import { DeleteGalleryArgs } from "./args/DeleteGalleryArgs";
import { DeleteManyGalleryArgs } from "./args/DeleteManyGalleryArgs";
import { FindFirstGalleryArgs } from "./args/FindFirstGalleryArgs";
import { FindManyGalleryArgs } from "./args/FindManyGalleryArgs";
import { FindOneGalleryArgs } from "./args/FindOneGalleryArgs";
import { UpdateGalleryArgs } from "./args/UpdateGalleryArgs";
import { UpdateManyGalleryArgs } from "./args/UpdateManyGalleryArgs";
import { UpsertGalleryArgs } from "./args/UpsertGalleryArgs";
import { Gallery } from "../../../models/Gallery";
import { AggregateGallery } from "../../outputs/AggregateGallery";
import { BatchPayload } from "../../outputs/BatchPayload";
export declare class GalleryCrudResolver {
    gallery(ctx: any, args: FindOneGalleryArgs): Promise<Gallery | null>;
    findFirstGallery(ctx: any, args: FindFirstGalleryArgs): Promise<Gallery | null>;
    galleries(ctx: any, args: FindManyGalleryArgs): Promise<Gallery[]>;
    createGallery(ctx: any, args: CreateGalleryArgs): Promise<Gallery>;
    deleteGallery(ctx: any, args: DeleteGalleryArgs): Promise<Gallery | null>;
    updateGallery(ctx: any, args: UpdateGalleryArgs): Promise<Gallery | null>;
    deleteManyGallery(ctx: any, args: DeleteManyGalleryArgs): Promise<BatchPayload>;
    updateManyGallery(ctx: any, args: UpdateManyGalleryArgs): Promise<BatchPayload>;
    upsertGallery(ctx: any, args: UpsertGalleryArgs): Promise<Gallery>;
    aggregateGallery(ctx: any, info: GraphQLResolveInfo, args: AggregateGalleryArgs): Promise<AggregateGallery>;
}
