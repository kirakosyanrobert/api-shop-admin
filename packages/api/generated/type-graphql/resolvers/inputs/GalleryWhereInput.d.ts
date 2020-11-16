import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class GalleryWhereInput {
    AND?: GalleryWhereInput[] | undefined;
    OR?: GalleryWhereInput[] | undefined;
    NOT?: GalleryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    url?: StringFilter | undefined;
    product?: ProductRelationFilter | undefined;
    productId?: StringFilter | undefined;
}
