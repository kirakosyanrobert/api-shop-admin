import { CreateGalleryArgs } from "./args/CreateGalleryArgs";
import { Gallery } from "../../../models/Gallery";
export declare class CreateGalleryResolver {
    createGallery(ctx: any, args: CreateGalleryArgs): Promise<Gallery>;
}
