import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CardUpdateManyDataInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    cardType?: StringFieldUpdateOperationsInput | undefined;
    lastFourDigit?: IntFieldUpdateOperationsInput | undefined;
}