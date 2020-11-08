import { UpdateGalleryArgs } from "./args/UpdateGalleryArgs";
import { Gallery } from "../../../models/Gallery";
export declare class UpdateGalleryResolver {
    updateGallery(ctx: any, args: UpdateGalleryArgs): Promise<Gallery | null>;
}
