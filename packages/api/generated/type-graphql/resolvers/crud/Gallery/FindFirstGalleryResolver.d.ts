import { FindFirstGalleryArgs } from "./args/FindFirstGalleryArgs";
import { Gallery } from "../../../models/Gallery";
export declare class FindFirstGalleryResolver {
    findFirstGallery(ctx: any, args: FindFirstGalleryArgs): Promise<Gallery | null>;
}
