import { FindOneGalleryArgs } from "./args/FindOneGalleryArgs";
import { Gallery } from "../../../models/Gallery";
export declare class FindOneGalleryResolver {
    gallery(ctx: any, args: FindOneGalleryArgs): Promise<Gallery | null>;
}
