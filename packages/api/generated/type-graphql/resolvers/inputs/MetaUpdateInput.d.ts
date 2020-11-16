import { MetaUpdatelanguagesInput } from "../inputs/MetaUpdatelanguagesInput";
import { ProductUpdateOneRequiredWithoutMetaInput } from "../inputs/ProductUpdateOneRequiredWithoutMetaInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MetaUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    publisher?: StringFieldUpdateOperationsInput | undefined;
    isbn?: StringFieldUpdateOperationsInput | undefined;
    edition?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    numberOfReader?: StringFieldUpdateOperationsInput | undefined;
    numberOfPage?: StringFieldUpdateOperationsInput | undefined;
    samplePDF?: StringFieldUpdateOperationsInput | undefined;
    languages?: MetaUpdatelanguagesInput | undefined;
    product?: ProductUpdateOneRequiredWithoutMetaInput | undefined;
}
