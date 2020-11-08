import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCardInput } from "../inputs/UserUpdateOneRequiredWithoutCardInput";
export declare class CardUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    cardType?: StringFieldUpdateOperationsInput | undefined;
    lastFourDigit?: IntFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCardInput | undefined;
}
