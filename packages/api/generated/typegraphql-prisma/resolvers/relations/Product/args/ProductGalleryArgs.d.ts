import { GalleryOrderByInput } from "../../../inputs/GalleryOrderByInput";
import { GalleryWhereInput } from "../../../inputs/GalleryWhereInput";
import { GalleryWhereUniqueInput } from "../../../inputs/GalleryWhereUniqueInput";
export declare class ProductGalleryArgs {
    where?: GalleryWhereInput | undefined;
    orderBy?: GalleryOrderByInput[] | undefined;
    cursor?: GalleryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "url" | "productId"> | undefined;
}
