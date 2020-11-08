import { MetaUpdatelanguagesInput } from "../inputs/MetaUpdatelanguagesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MetaUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    publisher?: StringFieldUpdateOperationsInput | undefined;
    isbn?: StringFieldUpdateOperationsInput | undefined;
    edition?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    numberOfReader?: StringFieldUpdateOperationsInput | undefined;
    numberOfPage?: StringFieldUpdateOperationsInput | undefined;
    samplePDF?: StringFieldUpdateOperationsInput | undefined;
    languages?: MetaUpdatelanguagesInput | undefined;
}
