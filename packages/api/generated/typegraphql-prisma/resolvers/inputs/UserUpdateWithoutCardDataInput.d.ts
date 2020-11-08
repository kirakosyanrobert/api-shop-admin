import { AddressUpdateManyWithoutUserInput } from "../inputs/AddressUpdateManyWithoutUserInput";
import { ContactUpdateManyWithoutUserInput } from "../inputs/ContactUpdateManyWithoutUserInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutCardDataInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    addresses?: AddressUpdateManyWithoutUserInput | undefined;
    contacts?: ContactUpdateManyWithoutUserInput | undefined;
}
