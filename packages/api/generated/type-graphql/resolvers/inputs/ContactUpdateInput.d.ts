import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutContactsInput } from "../inputs/UserUpdateOneRequiredWithoutContactsInput";
export declare class ContactUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    number?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutContactsInput | undefined;
}
