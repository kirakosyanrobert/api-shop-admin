import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAddressesInput } from "../inputs/UserUpdateOneRequiredWithoutAddressesInput";
export declare class AddressUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    location?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAddressesInput | undefined;
}
