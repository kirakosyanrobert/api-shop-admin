import { ProductCreateWithoutGalleryInput } from "../inputs/ProductCreateWithoutGalleryInput";
import { ProductUpdateWithoutGalleryDataInput } from "../inputs/ProductUpdateWithoutGalleryDataInput";
import { ProductUpsertWithoutGalleryInput } from "../inputs/ProductUpsertWithoutGalleryInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutGalleryInput {
    create?: ProductCreateWithoutGalleryInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutGalleryDataInput | undefined;
    upsert?: ProductUpsertWithoutGalleryInput | undefined;
}
