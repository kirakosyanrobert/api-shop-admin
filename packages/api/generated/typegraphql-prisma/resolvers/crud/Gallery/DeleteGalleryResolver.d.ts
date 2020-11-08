import { DeleteGalleryArgs } from "./args/DeleteGalleryArgs";
import { Gallery } from "../../../models/Gallery";
export declare class DeleteGalleryResolver {
    deleteGallery(ctx: any, args: DeleteGalleryArgs): Promise<Gallery | null>;
}
