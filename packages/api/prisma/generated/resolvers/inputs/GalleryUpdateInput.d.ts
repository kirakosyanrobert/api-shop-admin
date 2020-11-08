import { ProductUpdateOneRequiredWithoutGalleryInput } from "../inputs/ProductUpdateOneRequiredWithoutGalleryInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class GalleryUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutGalleryInput | undefined;
}
