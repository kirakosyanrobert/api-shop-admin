import { FindManyGalleryArgs } from "./args/FindManyGalleryArgs";
import { Gallery } from "../../../models/Gallery";
export declare class FindManyGalleryResolver {
    galleries(ctx: any, args: FindManyGalleryArgs): Promise<Gallery[]>;
}
