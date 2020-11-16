import { AuthorUpdateOneWithoutProductInput } from "../inputs/AuthorUpdateOneWithoutProductInput";
import { CategoryUpdateManyWithoutProductInput } from "../inputs/CategoryUpdateManyWithoutProductInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumProductTypeFieldUpdateOperationsInput } from "../inputs/EnumProductTypeFieldUpdateOperationsInput";
import { GalleryUpdateManyWithoutProductInput } from "../inputs/GalleryUpdateManyWithoutProductInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateWithoutMetaDataInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    unit?: StringFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    price?: IntFieldUpdateOperationsInput | undefined;
    salePrice?: IntFieldUpdateOperationsInput | undefined;
    discountInPercent?: IntFieldUpdateOperationsInput | undefined;
    per_unit?: IntFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    views?: NullableIntFieldUpdateOperationsInput | undefined;
    sales?: NullableIntFieldUpdateOperationsInput | undefined;
    type?: EnumProductTypeFieldUpdateOperationsInput | undefined;
    author?: AuthorUpdateOneWithoutProductInput | undefined;
    gallery?: GalleryUpdateManyWithoutProductInput | undefined;
    categories?: CategoryUpdateManyWithoutProductInput | undefined;
}