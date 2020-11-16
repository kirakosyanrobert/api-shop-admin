import { ProductUpdateOneRequiredWithoutAuthorInput } from "../inputs/ProductUpdateOneRequiredWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AuthorUpdateWithoutSocialsDataInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    avatar?: StringFieldUpdateOperationsInput | undefined;
    bio?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    website?: StringFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutAuthorInput | undefined;
}
