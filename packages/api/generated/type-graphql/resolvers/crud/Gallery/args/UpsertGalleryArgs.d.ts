import { GalleryCreateInput } from "../../../inputs/GalleryCreateInput";
import { GalleryUpdateInput } from "../../../inputs/GalleryUpdateInput";
import { GalleryWhereUniqueInput } from "../../../inputs/GalleryWhereUniqueInput";
export declare class UpsertGalleryArgs {
    where: GalleryWhereUniqueInput;
    create: GalleryCreateInput;
    update: GalleryUpdateInput;
}
