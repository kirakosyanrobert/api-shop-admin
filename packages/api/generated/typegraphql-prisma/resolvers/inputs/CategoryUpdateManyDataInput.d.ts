import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CategoryUpdateManyDataInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    icon?: NullableStringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    itemCount?: NullableIntFieldUpdateOperationsInput | undefined;
}
